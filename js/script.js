/**
 * O RECANTO DO SABOR - LANCHONETE E PASTELARIA
 * High-Converting Landing Page & Admin Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DEFAULT CONFIGURATION & LOCALSTORAGE
  // ==========================================

  const defaultConfig = {
    instaDeliveryUrl: 'https://instadelivery.com.br/recantodosabor',
    whatsappNumber: '5584999990000',
    instagramHandle: '@recantodosabor',
    promoTitle: 'Compre 2 Double Smash Burgers e ganhe 1 Batata Média Crocante!',
    promoCoupon: 'RECANTO10',
    hoursText: 'Segunda a Domingo · 17:00 às 23:00',
    addressText: 'Avenida das Delícias, Nº 100 - Centro, São Paulo do Potengi - RN'
  };

  function getAdminConfig() {
    const saved = localStorage.getItem('recanto_admin_config');
    return saved ? JSON.parse(saved) : defaultConfig;
  }

  function saveAdminConfig(config) {
    localStorage.setItem('recanto_admin_config', JSON.stringify(config));
    applyAdminConfig();
  }

  function applyAdminConfig() {
    const config = getAdminConfig();

    // Update all InstaDelivery links on the page
    document.querySelectorAll('.instadelivery-link').forEach(link => {
      link.href = config.instaDeliveryUrl || defaultConfig.instaDeliveryUrl;
    });

    // Update promo title & coupon
    const promoTitleEl = document.getElementById('promoTitleDisplay');
    if (promoTitleEl) promoTitleEl.textContent = config.promoTitle;

    const promoCouponEl = document.getElementById('promoCouponDisplay');
    if (promoCouponEl) promoCouponEl.textContent = config.promoCoupon;

    // Update hours & address
    const hoursEl = document.getElementById('hoursDisplay');
    if (hoursEl) hoursEl.innerHTML = config.hoursText.replace('·', '<br />');

    const addressEl = document.getElementById('addressDisplay');
    if (addressEl) addressEl.textContent = config.addressText;

    const phoneEl = document.getElementById('phoneDisplay');
    if (phoneEl) phoneEl.textContent = config.whatsappNumber;

    const instaEl = document.getElementById('instaLinkDisplay');
    if (instaEl) {
      instaEl.href = `https://instagram.com/${config.instagramHandle.replace('@', '')}`;
      instaEl.innerHTML = `<i class="fab fa-instagram"></i> ${config.instagramHandle}`;
    }

    const footerWaEl = document.getElementById('footerWaLink');
    if (footerWaEl) footerWaEl.href = `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}`;

    const footerInstaEl = document.getElementById('footerInstaLink');
    if (footerInstaEl) footerInstaEl.href = `https://instagram.com/${config.instagramHandle.replace('@', '')}`;
  }

  // ==========================================
  // 2. FEATURED PRODUCTS (6 TO 8 TOP ITEMS)
  // ==========================================

  const featuredProducts = [
    {
      id: 1,
      name: 'Mega Arretado',
      category: 'Mais Vendido',
      badge: '🔥 Nº 1 de Vendas',
      desc: 'Pão australiano amanteigado, 2 hambúrgueres artesanais 160g, duplo cheddar, farofa crocante de bacon e cebola caramelizada.',
      price: 'R$ 30,00',
      rating: '5.0',
      reviewsCount: '58',
      image: 'assets/hero_burger.jpg'
    },
    {
      id: 2,
      name: 'Batata Carne de Sol na Nata',
      category: 'Escolha da Casa',
      badge: '🧀 Para Compartilhar',
      desc: 'Batatas fritas super crocantes cobertas com farta carne de sol desfiada na nata, queijo coalho gratinado e farofa artesanal.',
      price: 'R$ 58,00',
      rating: '5.0',
      reviewsCount: '42',
      image: 'assets/special_fries.jpg'
    },
    {
      id: 3,
      name: 'Pastel Especial Recanto',
      category: 'Favorito dos Clientes',
      badge: '🥟 Crocante e Suculento',
      desc: 'Massa levíssima e sequinha recheada com carne moída bem temperada, queijo muçarela derretido, presunto, ovo e milho.',
      price: 'R$ 18,00',
      rating: '4.9',
      reviewsCount: '35',
      image: 'assets/gallery_pastels.jpg'
    },
    {
      id: 4,
      name: 'Double Smash Bacon',
      category: 'Mais Vendido',
      badge: '🥓 Favorito da Galera',
      desc: 'Pão brioche macio, 2 smash burgers crocantinhos de 90g, fatias generosas de bacon artesanal e maionese secreta da casa.',
      price: 'R$ 28,00',
      rating: '5.0',
      reviewsCount: '49',
      image: 'assets/promo_smash.jpg'
    },
    {
      id: 5,
      name: 'Milk-shake Choco Gourmet',
      category: 'Escolha da Casa',
      badge: '🍫 Sobremesa Perfeita',
      desc: 'Sorvete premium de chocolate, calda generosa nas bordas, chantilly cremoso artesanal e raspas de biscoito crocante.',
      price: 'R$ 20,00',
      rating: '4.9',
      reviewsCount: '27',
      image: 'assets/gallery_milkshake.jpg'
    },
    {
      id: 6,
      name: 'Açaí Supremo da Casa',
      category: 'Favorito dos Clientes',
      badge: '💜 100% Puro e Cremoso',
      desc: 'Açaí cremoso de altíssima pureza com morangos frescos fatiados, banana, leite em pó, granola especial e leite condensado.',
      price: 'R$ 22,00',
      rating: '5.0',
      reviewsCount: '63',
      image: 'assets/hero_acai.jpg'
    }
  ];

  function renderFeaturedProducts() {
    const container = document.getElementById('featuredProductsContainer');
    if (!container) return;

    const config = getAdminConfig();
    const linkUrl = config.instaDeliveryUrl || defaultConfig.instaDeliveryUrl;

    container.innerHTML = featuredProducts.map(product => `
      <div class="special-card reveal">
        <div class="special-card__img-container">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="special-card__badge">${product.badge}</span>
        </div>
        <div class="special-card__body">
          <h3 class="special-card__title">${product.name}</h3>
          <p class="special-card__desc">${product.desc}</p>
          <div class="special-card__footer">
            <div class="special-card__rating">
              <i class="fas fa-star"></i> ${product.rating} <span>(${product.reviewsCount})</span>
            </div>
            <span class="special-card__price">${product.price}</span>
          </div>
          <a href="${linkUrl}" target="_blank" rel="noopener" class="btn btn--primary btn--full instadelivery-link">
            🍔 Pedir no InstaDelivery
          </a>
        </div>
      </div>
    `).join('');
  }

  // ==========================================
  // 3. COUNTDOWN TIMER (OFERTA DA SEMANA)
  // ==========================================

  function startCountdown() {
    const hoursEl = document.getElementById('timerHours');
    const minutesEl = document.getElementById('timerMinutes');
    const secondsEl = document.getElementById('timerSeconds');

    if (!hoursEl || !minutesEl || !secondsEl) return;

    // Set countdown for 4 hours from current session start
    let totalSeconds = (4 * 3600) + (28 * 60) + 15;

    setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = 24 * 3600; // reset
      } else {
        totalSeconds--;
      }

      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
  }

  // ==========================================
  // 4. REVIEWS SLIDER (CARROSSEL)
  // ==========================================

  function initReviewsSlider() {
    const cards = document.querySelectorAll('#reviewsContainer .review-card');
    const prevBtn = document.getElementById('reviewPrevBtn');
    const nextBtn = document.getElementById('reviewNextBtn');

    if (!cards.length) return;

    let currentIndex = 0;

    function showReview(index) {
      cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showReview(currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showReview(currentIndex);
      });
    }

    // Auto rotate every 6 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      showReview(currentIndex);
    }, 6000);
  }

  // ==========================================
  // 5. SCROLL REVEAL & HEADER CONTROLLER
  // ==========================================

  function initScrollBehavior() {
    const header = document.getElementById('header');
    const reveals = document.querySelectorAll('.reveal');

    // Header scroll background change
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Intersection Observer for smooth animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));
  }

  // Mobile Hamburger Toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 6. ADMIN MODAL CONTROLLER
  // ==========================================

  const adminOverlay = document.getElementById('adminOverlay');
  const adminModal = document.getElementById('adminModal');
  const openAdminBtn = document.getElementById('openAdminBtn');
  const closeAdminBtn = document.getElementById('closeAdminBtn');
  const adminForm = document.getElementById('adminForm');

  function openAdmin() {
    const config = getAdminConfig();

    document.getElementById('adminInstaDeliveryUrl').value = config.instaDeliveryUrl || '';
    document.getElementById('adminWhatsappNumber').value = config.whatsappNumber || '';
    document.getElementById('adminInstagramHandle').value = config.instagramHandle || '';
    document.getElementById('adminPromoTitle').value = config.promoTitle || '';
    document.getElementById('adminPromoCoupon').value = config.promoCoupon || '';
    document.getElementById('adminHoursText').value = config.hoursText || '';
    document.getElementById('adminAddressText').value = config.addressText || '';

    adminOverlay.classList.add('active');
    adminModal.classList.add('active');
  }

  function closeAdmin() {
    adminOverlay.classList.remove('active');
    adminModal.classList.remove('active');
  }

  if (openAdminBtn) openAdminBtn.addEventListener('click', openAdmin);
  if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdmin);
  if (adminOverlay) adminOverlay.addEventListener('click', closeAdmin);

  if (adminForm) {
    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newConfig = {
        instaDeliveryUrl: document.getElementById('adminInstaDeliveryUrl').value.trim(),
        whatsappNumber: document.getElementById('adminWhatsappNumber').value.trim(),
        instagramHandle: document.getElementById('adminInstagramHandle').value.trim(),
        promoTitle: document.getElementById('adminPromoTitle').value.trim(),
        promoCoupon: document.getElementById('adminPromoCoupon').value.trim(),
        hoursText: document.getElementById('adminHoursText').value.trim(),
        addressText: document.getElementById('adminAddressText').value.trim()
      };

      saveAdminConfig(newConfig);
      renderFeaturedProducts();
      closeAdmin();

      alert('✨ Alterações salvas com sucesso! A página foi atualizada.');
    });
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  renderFeaturedProducts();
  applyAdminConfig();
  startCountdown();
  initReviewsSlider();
  initScrollBehavior();
});
