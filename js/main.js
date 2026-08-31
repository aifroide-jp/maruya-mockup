document.addEventListener('DOMContentLoaded', () => {
  // 1. スマホ向けハンバーガーメニュー制御
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('is-open');
    });

    // メニュー内リンククリック時に閉じる
    const navLinks = nav.querySelectorAll('.c-nav__link, .c-btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  // 2. FAQ アコーディオン制御
  const faqQuestions = document.querySelectorAll('.p-faq__question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const answer = question.nextElementSibling;

      // Toggle state
      question.setAttribute('aria-expanded', !isExpanded);

      if (!isExpanded) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });

  // 3. スムーススクロール（補正用）
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
