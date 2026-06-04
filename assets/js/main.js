(function () {
    'use strict';

    /* Google Form iframe fallback */
    const gformIframe = document.getElementById('gform-iframe');
    const gformFallback = document.getElementById('gform-fallback');
    if (gformIframe && gformFallback) {
        const showFallback = () => {
            gformIframe.hidden = true;
            gformFallback.hidden = false;
        };
        gformIframe.addEventListener('error', showFallback);
        /* Timeout: si en 8 s el iframe sigue en blanco (0 de alto real), muestra el botón */
        setTimeout(() => {
            try {
                const doc = gformIframe.contentDocument || gformIframe.contentWindow?.document;
                if (!doc || doc.body?.innerHTML === '') showFallback();
            } catch (_) {
                /* Cross-origin blocked → el iframe cargó en dominio externo, es correcto */
            }
        }, 8000);
    }

    /* Scroll reveal */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        },
        { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    /* FAQ accordion */
    document.querySelectorAll('.faq-q').forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    /* Mobile nav toggle */
    const navToggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    function closeMobileMenu() {
        if (!navToggle || !mobileMenu) return;
        navToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
        document.body.classList.remove('menu-open');
    }

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            mobileMenu.hidden = expanded;
            document.body.classList.toggle('menu-open', !expanded);
        });

        /* Close mobile menu when clicking any anchor link inside it */
        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    /* Services dropdown (desktop) */
    document.querySelectorAll('.nav__dropdown-trigger').forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = trigger.closest('.nav__item--dropdown');
            const open = parent.classList.contains('open');
            document.querySelectorAll('.nav__item--dropdown').forEach((el) => {
                el.classList.remove('open');
                el.querySelector('.nav__dropdown-trigger')?.setAttribute('aria-expanded', 'false');
            });
            if (!open) {
                parent.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.nav__item--dropdown').forEach((el) => {
            el.classList.remove('open');
            el.querySelector('.nav__dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        });
    });

    /* Form placeholder submit */
    document.querySelectorAll('form[data-prevent-default]').forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('[type="submit"]');
            const original = btn?.textContent;
            if (btn) {
                btn.textContent = '✓ Enviado! Te contactamos pronto';
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = original;
                    btn.disabled = false;
                    form.reset();
                }, 3500);
            }
        });
    });

    /* Active nav link */
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link[href], .mobile-menu__links a[href]').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
})();
