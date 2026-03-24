/* ================================================================
   PROSANTO KUMAR BARMAN — Portfolio · assets/main.js
================================================================ */

/* ----------------------------------------------------------------
   PROJECT DATA
---------------------------------------------------------------- */
var PROJECTS = {
  selfBalancingRobot: {
    title: 'Self-Balancing Robot',
    status: 'Completed',
    category: 'Embedded · Robotics',
    featured: true,
    impact: 'Maintains balance within ±3° using real-time PID control · Won 1st place among 40+ teams',
    video: 'https://www.youtube.com/embed/Fwx5p4lYR3o',
    description: 'A PID-controlled self-balancing robot built using an MPU6050 IMU sensor and Arduino. The robot reads real-time angular velocity and acceleration data, processes it through a PID control loop, and drives motors to maintain dynamic balance within ±3° tilt error.\n\nThis project required deep understanding of sensor fusion, control theory, and real-time embedded programming. Used in the DUET Techfest 2025 Line Follower Robot competition — won 1st place among 40+ teams.',
    tech: ['Arduino', 'C++', 'MPU6050', 'PID Control', 'Motor Driver', 'PWM'],
    highlights: ['±3° tilt accuracy', 'Real-time PID loop', 'LFR Champion — DUET Techfest 2025', 'BDT 20,000 prize'],
    github: '',
    demo: '',
    learned: 'Mastered PID tuning, sensor fusion with complementary filters, and real-time embedded control systems.'
  },
  lineFollowingRobot: {
    title: 'Line Following Robot',
    status: 'Completed',
    category: 'Embedded · Robotics',
    impact: 'Autonomous path detection and tracking · 1st place DUET Techfest 2025',
    video: 'https://www.youtube.com/embed/bUgIBGFxVEo',
    description: 'A line follower robot is an autonomous robot that detects and follows a predetermined path marked on the floor using IR sensors and a microcontroller. Uses PID control for smooth direction correction in real-time.\n\nWon 1st place at DUET Techfest 2025 among 40+ teams from universities across Bangladesh.',
    tech: ['Arduino', 'C++', 'IR Sensors', 'PID Control', 'Motor Driver', 'PWM'],
    highlights: ['Real-time PID loop', 'LFR Champion — DUET Techfest 2025', 'BDT 20,000 prize'],
    github: '',
    demo: '',
    learned: 'Learned how a robot can follow a line and make decisions at junctions. Mastered PID tuning and sensor calibration.'
  },
  automaticSolarTracking: {
    title: 'Automatic Solar Tracker',
    status: 'Completed',
    category: 'Embedded · IoT',
    impact: 'Dual-axis automatic sun alignment · maximizes energy capture',
    video: 'https://www.youtube.com/embed/8XJnWJ_nUiY',
    description: 'LDR sensors detect which direction has higher light intensity. The system uses this to decide which direction to move the servo motors. If light intensity is low the bot moves toward the light source and fixes the solar panel at the optimal angle. If intensity is already high, it holds position.\n\nImplemented threshold-based control to minimize unnecessary motor movement and extend hardware life.',
    tech: ['Arduino', 'C++', 'LDR Sensors', 'Servo Motor'],
    highlights: ['Dual-axis tracking', 'Automatic alignment', 'Energy optimization', 'Threshold-based control'],
    github: '',
    demo: '',
    learned: 'Learned how to interface analog LDR sensors, control servo motors precisely, and design energy-efficient embedded logic.'
  },
  sentiment: {
    title: 'Twitter Sentiment Analysis',
    status: 'Completed',
    category: 'AI / ML · Python',
    impact: 'Classifies tweet sentiment with NLP pipeline and multi-classifier evaluation',
    image: '',
    video: '',
    description: 'A machine learning pipeline to classify tweet sentiment as positive, negative, or neutral. Includes data cleaning, NLP preprocessing (tokenization, stopword removal, stemming), TF-IDF feature extraction, and evaluation of multiple classifiers.\n\nHandled real-world noisy social media text, class imbalance, and compared classifier performance using accuracy, precision, recall, and F1-score.',
    tech: ['Python', 'scikit-learn', 'pandas', 'numpy', 'NLTK', 'TF-IDF', 'Matplotlib'],
    highlights: ['NLP preprocessing pipeline', 'TF-IDF feature extraction', 'Multi-classifier evaluation', 'Data visualization'],
    github: '',
    demo: '',
    learned: 'Built understanding of NLP fundamentals, feature engineering for text data, and ML evaluation methodology.'
  },
  ecommerce: {
    title: 'Robotics E-Commerce Platform',
    status: 'Completed',
    category: 'Web · Full-Stack',
    impact: 'Full-stack platform for robotics equipment with admin dashboard',
    image: '',
    video: '',
    description: 'A full-stack e-commerce platform for robotics equipment — components, modules, development boards, and tools. Supports product listings with specs, shopping cart, user authentication, order management, and a complete admin dashboard.\n\nBuilt with PHP + MySQL backend and a MERN stack frontend for a dynamic user experience.',
    tech: ['PHP', 'MySQL', 'React', 'Node.js', 'MongoDB', 'Express.js', 'HTML/CSS'],
    highlights: ['Full-stack architecture', 'Admin dashboard', 'Order management', 'User authentication'],
    github: '',
    demo: '',
    learned: 'Gained experience with multi-technology stack integration, REST API design, and database schema design.'
  }
};


/* ----------------------------------------------------------------
   1. NAVBAR — scroll darken + mobile toggle + outside click close
---------------------------------------------------------------- */
(function initNavbar() {
  var navbar = document.getElementById('navbar');
  var toggle = document.getElementById('nav-toggle');
  var links  = document.getElementById('nav-links');
  if (!navbar || !toggle || !links) return;

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close menu on outside click */
  document.addEventListener('click', function (e) {
    if (!links.classList.contains('open')) return;
    if (navbar.contains(e.target)) return;
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
}());


/* ----------------------------------------------------------------
   2. ACTIVE NAV LINK
---------------------------------------------------------------- */
(function initActiveNav() {
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('section[id]');
  if (!navLinks.length || !sections.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function (s) { observer.observe(s); });
}());


/* ----------------------------------------------------------------
   3. AUTO-FETCH CODEFORCES COUNT
---------------------------------------------------------------- */
(function fetchCFCount() {
  var el = document.getElementById('cf-count');
  if (!el) return;

  fetch('https://codeforces.com/api/user.status?handle=Prosantokb&from=1&count=10000')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data.status !== 'OK') return;
      var solved = {};
      data.result.forEach(function (sub) {
        if (sub.verdict === 'OK') {
          solved[sub.problem.contestId + '_' + sub.problem.index] = true;
        }
      });
      var count = Object.keys(solved).length;
      if (count > 0) el.textContent = count + '+';
    })
    .catch(function () { /* keep fallback value */ });
}());


/* ----------------------------------------------------------------
   4. ROTATING TYPED SENTENCES — fixed min-height prevents layout jump
---------------------------------------------------------------- */
(function initTyped() {
  var el = document.getElementById('typed-text');
  if (!el) return;

  var sentences = [
    'I\'m a CSE student passionate about robotics.',
    'I build hardware-software systems from scratch.',
    'Building intelligent systems that solve real problems.'
  ];

  var idx        = 0;
  var charIndex  = 0;
  var isDeleting = false;
  var TYPE_SPEED   = 42;
  var DELETE_SPEED = 22;
  var PAUSE_AFTER  = 2000;
  var PAUSE_BEFORE = 400;

  function type() {
    var current = sentences[idx];
    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, PAUSE_AFTER);
        return;
      }
      setTimeout(type, TYPE_SPEED);
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        idx = (idx + 1) % sentences.length;
        setTimeout(type, PAUSE_BEFORE);
        return;
      }
      setTimeout(type, DELETE_SPEED);
    }
  }

  setTimeout(type, 900);
}());


/* ----------------------------------------------------------------
   5. ANIMATED DOT GRID — right side of hero only
---------------------------------------------------------------- */
(function initDotGrid() {
  var canvas = document.getElementById('hero-dots');
  if (!canvas) return;
  var ctx  = canvas.getContext('2d');
  var dots = [];

  function resize() {
    var hero   = canvas.parentElement;
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createDots() {
    dots = [];
    var w = canvas.width;
    var h = canvas.height;
    var xStart = w * 0.62;
    var xEnd   = w * 0.97;
    var yStart = h * 0.08;
    var yEnd   = h * 0.82;
    for (var i = 0; i < 55; i++) {
      dots.push({
        x:  xStart + Math.random() * (xEnd - xStart),
        y:  yStart + Math.random() * (yEnd - yStart),
        r:  Math.random() * 1.5 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        o:  Math.random() * 0.35 + 0.08
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    var h = canvas.height;
    var xStart = w * 0.62;
    var xEnd   = w * 0.97;
    var yStart = h * 0.08;
    var yEnd   = h * 0.82;
    dots.forEach(function (d) {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < xStart) d.x = xEnd;
      if (d.x > xEnd)   d.x = xStart;
      if (d.y < yStart) d.y = yEnd;
      if (d.y > yEnd)   d.y = yStart;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, ' + d.o + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  function init() { resize(); createDots(); draw(); }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  window.addEventListener('resize', function () { resize(); createDots(); }, { passive: true });
}());


/* ----------------------------------------------------------------
   6. SCROLL REVEAL
---------------------------------------------------------------- */
(function initScrollReveal() {
  var elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
}());


/* ----------------------------------------------------------------
   7. PROJECT FILTERS + SHOW MORE / SHOW LESS
---------------------------------------------------------------- */
(function initProjects() {
  var buttons   = document.querySelectorAll('.filter-btn');
  var cards     = document.querySelectorAll('.project-card');
  var moreBtn   = document.getElementById('projects-more-btn');
  var extraCards = document.querySelectorAll('.project-extra');
  var expanded  = false;

  /* Show more / less */
  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      expanded = !expanded;
      extraCards.forEach(function (card) {
        card.classList.toggle('visible', expanded);
      });
      moreBtn.textContent = expanded ? 'Show less' : 'Show more projects';
      moreBtn.classList.toggle('expanded', expanded);
      /* Re-add the SVG arrow */
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '14'); svg.setAttribute('height', '14');
      svg.setAttribute('viewBox', '0 0 14 14'); svg.setAttribute('fill', 'none');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', expanded ? 'M3 9l4-4 4 4' : 'M3 5l4 4 4-4');
      path.setAttribute('stroke', 'currentColor');
      path.setAttribute('stroke-width', '1.6');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      svg.appendChild(path);
      moreBtn.appendChild(svg);
    });
  }

  /* Filter buttons */
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      cards.forEach(function (card) {
        var cats = card.getAttribute('data-categories').split(',');
        var show = (filter === 'all' || cats.indexOf(filter) !== -1);
        /* For extra cards: only show if expanded OR specifically filtered */
        var isExtra = card.classList.contains('project-extra');
        if (isExtra) {
          card.classList.toggle('visible', show && (expanded || filter !== 'all'));
          card.style.display = (show && (expanded || filter !== 'all')) ? '' : 'none';
        } else {
          card.style.display = show ? '' : 'none';
        }
      });

      /* Hide "show more" button when a specific filter is active */
      if (moreBtn) {
        moreBtn.parentElement.style.display = (filter === 'all') ? '' : 'none';
      }
    });
  });
}());


/* ----------------------------------------------------------------
   8. PROJECT MODAL — close on back button
---------------------------------------------------------------- */
(function initModal() {
  var overlay  = document.getElementById('modal-overlay');
  var content  = document.getElementById('modal-content');
  var closeBtn = document.getElementById('modal-close');
  if (!overlay || !content || !closeBtn) return;

  function buildHTML(p) {
    var impactHTML = p.impact
      ? '<div class="modal-impact">' + p.impact + '</div>'
      : '';

    var imgHTML = (!p.video && p.image)
      ? '<img src="' + p.image + '" alt="' + p.title + '" class="modal-image" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" /><div class="modal-image-placeholder" style="display:none;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Save image as: ' + p.image + '</span></div>'
      : '';

    var videoHTML = p.video
      ? (p.video.indexOf('youtube.com') !== -1 || p.video.indexOf('youtu') !== -1
          ? '<div class="modal-video"><iframe src="' + p.video + '" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>'
          : '<div class="modal-video"><video src="' + p.video + '" controls preload="metadata" style="width:100%;height:100%;border-radius:10px;background:#000;"></video></div>')
      : '';

    var techHTML = p.tech.map(function (t) { return '<span class="tech-tag">' + t + '</span>'; }).join('');
    var hlHTML   = p.highlights.map(function (h) { return '<span class="pill">' + h + '</span>'; }).join('');
    var descHTML = p.description.split('\n\n').map(function (para) { return '<p class="modal-desc">' + para + '</p>'; }).join('');

    var actions = '';
    if (p.github) actions += '<a href="' + p.github + '" target="_blank" rel="noopener" class="modal-btn modal-btn-primary">↗ View on GitHub</a>';
    if (p.demo)   actions += '<a href="' + p.demo   + '" target="_blank" rel="noopener" class="modal-btn modal-btn-ghost">↗ Live Demo</a>';

    return (
      '<div class="modal-header"><h2 class="modal-title">' + p.title + '</h2>' +
      '<div class="modal-status-row"><span class="project-status status-done">' + p.status + '</span><span class="modal-category">' + p.category + '</span></div></div>' +
      impactHTML + imgHTML + videoHTML +
      '<div class="modal-section"><div class="modal-section-label">About this project</div>' + descHTML + '</div>' +
      '<div class="modal-section"><div class="modal-section-label">Key highlights</div><div class="modal-highlights">' + hlHTML + '</div></div>' +
      '<div class="modal-section"><div class="modal-section-label">Tech stack</div><div class="modal-tech">' + techHTML + '</div></div>' +
      (p.learned ? '<div class="modal-section"><div class="modal-section-label">What I learned</div><p class="modal-desc">' + p.learned + '</p></div>' : '') +
      (actions ? '<div class="modal-actions">' + actions + '</div>' : '')
    );
  }

  function openModal(key) {
    var p = PROJECTS[key];
    if (!p) return;
    content.innerHTML = buildHTML(p);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    /* Push state so back button closes modal */
    history.pushState({ modal: key }, '', '');
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    /* Stop video */
    var video = content.querySelector('video');
    if (video) { video.pause(); video.currentTime = 0; }
    var iframe = content.querySelector('iframe');
    if (iframe) { var s = iframe.src; iframe.src = ''; iframe.src = s; }
  }

  document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
    card.addEventListener('click', function () { openModal(card.getAttribute('data-project')); });
  });

  closeBtn.addEventListener('click', function () {
    closeModal();
    if (history.state && history.state.modal) history.back();
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      closeModal();
      if (history.state && history.state.modal) history.back();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
      if (history.state && history.state.modal) history.back();
    }
  });

  /* Back button closes modal */
  window.addEventListener('popstate', function (e) {
    if (overlay.classList.contains('open')) closeModal();
  });
}());


/* ----------------------------------------------------------------
   9. LIGHTBOX — achievements + certificate photos
---------------------------------------------------------------- */
(function initLightbox() {
  var lightbox = document.getElementById('lightbox');
  var lbImg    = document.getElementById('lightbox-img');
  var lbCap    = document.getElementById('lightbox-caption');
  var lbCount  = document.getElementById('lightbox-counter');
  var lbClose  = document.getElementById('lightbox-close');
  var lbBack   = document.getElementById('lightbox-backdrop');
  var lbPrev   = document.getElementById('lightbox-prev');
  var lbNext   = document.getElementById('lightbox-next');
  if (!lightbox) return;

  function showArrows(show) {
    if (lbPrev) lbPrev.classList.toggle('hidden', !show);
    if (lbNext) lbNext.classList.toggle('hidden', !show);
  }

  function openSimple(imgSrc, caption) {
    lbImg.src = imgSrc;
    lbImg.alt = caption || '';
    if (lbCap) lbCap.textContent = caption || '';
    if (lbCount) lbCount.textContent = '';
    showArrows(false);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function () { lbImg.src = ''; }, 300);
  }

  document.querySelectorAll('.cert-clickable').forEach(function (img) {
    img.addEventListener('click', function () {
      openSimple(img.getAttribute('data-img'), img.getAttribute('data-caption'));
    });
  });

  document.querySelectorAll('.see-photo-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') return;
      e.stopPropagation();
      var imgSrc  = btn.getAttribute('data-img');
      var caption = btn.getAttribute('data-caption');
      if (imgSrc) openSimple(imgSrc, caption);
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbBack)  lbBack.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  showArrows(false);
}());


/* ----------------------------------------------------------------
   10. BACK TO TOP
---------------------------------------------------------------- */
(function initBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}());


/* ----------------------------------------------------------------
   11. COPY EMAIL + TOAST
---------------------------------------------------------------- */
function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function () { toast.classList.remove('show'); }, 2800);
}

(function initCopyEmail() {
  document.querySelectorAll('.contact-copy').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var text = btn.getAttribute('data-copy');
      if (!text) return;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () { showToast('Email copied!'); });
      } else {
        var el = document.createElement('textarea');
        el.value = text;
        el.style.cssText = 'position:fixed;opacity:0;';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showToast('Email copied!');
      }
    });
  });
}());


/* ----------------------------------------------------------------
   12. BOOK CATEGORY FILTER
---------------------------------------------------------------- */
(function initBookFilter() {
  var buttons = document.querySelectorAll('.book-filter-btn');
  var books   = document.querySelectorAll('.book-card');
  if (!buttons.length || !books.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-book-filter');
      books.forEach(function (book) {
        var cat = book.getAttribute('data-book-cat');
        book.classList.toggle('hidden', filter !== 'all' && cat !== filter);
      });
    });
  });
}());


/* ----------------------------------------------------------------
   13. FOOTER YEAR
---------------------------------------------------------------- */
(function () {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}());
