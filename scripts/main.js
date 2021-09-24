// Language selection functionality
if (/^ru\b/.test(navigator.language)) {
  document.documentElement.setAttribute('lang', 'ru');
}

const btnsLang = document.querySelectorAll('.btn-lang');
btnsLang.forEach(btn => btn.addEventListener('click', changeLanguage));

function changeLanguage() {
  document.documentElement.setAttribute('lang', this.name);
}

// Marking active nav tab functionality
document.addEventListener('scroll', debounce(markActiveTab, 80));

function markActiveTab() {
  const sections = document.querySelectorAll('section');
  const halfViewport = 0.5 * window.innerHeight;
  sections.forEach(section => {
    const domRect = section.getBoundingClientRect();
    if (domRect.top < halfViewport && domRect.bottom > halfViewport) {
      const activeTab = document.querySelector(`[data-id=${section.id}]`);
      if (activeTab.classList.contains('active')) return;
      else {
        const prevTab = document.querySelector('.active');
        if (prevTab) prevTab.classList.remove('active');
        activeTab.classList.add('active');
      }
    }
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
