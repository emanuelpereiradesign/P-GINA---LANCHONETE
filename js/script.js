document.addEventListener('DOMContentLoaded', () => {

  // --- Complete Menu Data from CARDAPIO.md ---
  const menuItems = {
    hamburgueres: [
      { name: 'Mega Kids', desc: 'Pão brioche, hambúrguer artesanal, queijo cheddar.', price: 17.00 },
      { name: 'Mega Burgs', desc: 'Pão brioche, hambúrguer artesanal, queijo mussarela, alface e tomate.', price: 19.00 },
      { name: 'Mega Egg', desc: 'Pão brioche, hambúrguer artesanal, queijo mussarela, ovo, farofa de bacon, cebola caramelizada, alface e tomate.', price: 25.00 },
      { name: 'Mega Cheddar', desc: 'Pão brioche, hambúrguer artesanal, molho cheddar, farofa de bacon, cebola caramelizada, alface e tomate.', price: 26.00 },
      { name: 'Mega Catupiry', desc: 'Pão australiano, hambúrguer artesanal, molho catupiry, farofa de bacon, cebola caramelizada, alface e tomate.', price: 25.00 },
      { name: 'Mega Bacon', desc: 'Pão brioche, hambúrguer artesanal, bacon fatia, queijo mussarela, farofa de bacon, cebola caramelizada, alface e tomate.', price: 27.00 },
      { name: 'Mega Cheddar Bacon', desc: 'Pão brioche, hambúrguer artesanal, bacon fatia, molho cheddar, farofa de bacon, cebola caramelizada, alface e tomate.', price: 28.00 },
      { name: 'Mega Arretado', desc: 'Pão australiano, 2 hambúrgueres artesanais, ovo, queijo cheddar, farofa de bacon, cebola caramelizada, alface e tomate.', price: 30.00 },
      { name: 'Mega Brother', desc: 'Pão brioche, 3 hambúrgueres artesanais, 2 ovos, queijo cheddar, farofa de bacon, cebola caramelizada, alface e tomate.', price: 35.00 },
      { name: 'Fran Bacon', desc: 'Pão brioche, frango empanado, bacon fatia, queijo cheddar, farofa de bacon, cebola caramelizada, alface e tomate.', price: 25.00 },
      { name: 'Mistura Nordestina', desc: 'Pão brioche, carne de sol em cubos, ovo, queijo coalho, cebola roxa, alface e tomate.', price: 28.00 },
      { name: 'Sertanejo', desc: 'Pão baguete, carne de sol na nata, ovo, queijo coalho, cebola roxa, alface e tomate.', price: 26.00 },
      { name: 'Calabresa', desc: 'Pão baguete, calabresa, ovo, queijo coalho, cebola roxa, alface e tomate.', price: 23.00 },
      { name: 'Coração', desc: 'Pão baguete, coração de galinha, ovo, queijo coalho, cebola roxa, alface e tomate.', price: 24.00 },
      { name: 'Camarão', desc: 'Pão brioche, filé de camarão, ovo, queijo cheddar, cream cheese, alface e tomate.', price: 30.00 },
      { name: 'Picanha', desc: 'Pão brioche, picanha, ovo, queijo mussarela, farofa de bacon, alface e tomate.', price: 28.00 },
      { name: 'Mussarela', desc: 'Pão brioche, hambúrguer artesanal, mussarela empanada, queijo mussarela, farofa de bacon, cebola caramelizada, alface e tomate.', price: 26.00 },
      { name: 'Chicken', desc: 'Pão brioche, frango empanado, ovo, queijo mussarela, farofa de bacon, cebola caramelizada, alface e tomate.', price: 27.00 },
      { name: 'Mega Crocante', desc: 'Pão de queijo, hambúrguer artesanal enrolado no bacon, queijo mussarela, cebola crocante, alface e tomate.', price: 28.00 }
    ],
    tradicionais: [
      { name: 'Avexado', desc: 'Pão, hambúrguer, queijo, alface, tomate, milho e batata.', price: 10.00 },
      { name: 'Bauru Especial', desc: 'Pão, hambúrguer, ovo, queijo, presunto, catupiry, tomate, milho e batata.', price: 12.00 },
      { name: 'X Tudão', desc: 'Pão, hambúrguer, ovo, bacon, salsicha, queijo, presunto, catupiry, alface, tomate, milho e batata.', price: 15.00 },
      { name: 'Mega X Bacon', desc: 'Pão, hambúrguer, bacon crocante, queijo, presunto, catupiry, alface, milho e batata.', price: 15.00 },
      { name: 'Mega Passaporte', desc: 'Pão, creme de frango, queijo, presunto, catupiry, alface, tomate, milho e batata.', price: 13.00 },
      { name: 'Fran Bacon Tradicional', desc: 'Pão, creme de frango, bacon crocante, queijo, presunto, cheddar, alface, tomate, milho e batata.', price: 14.00 },
      { name: 'Fran Burg', desc: 'Pão, hambúrguer, creme de frango, queijo, presunto, cheddar, alface, tomate, milho e batata.', price: 14.00 },
      { name: 'À Moda Da Casa', desc: 'Pão, 2 hambúrgueres, ovo, carne de sol, bacon, queijo, presunto, catupiry, cheddar, alface, tomate, milho e batata.', price: 18.00 },
      { name: 'Nordestino', desc: 'Pão, carne de sol, ovo, queijo coalho, catupiry, alface, tomate, milho e batata.', price: 17.00 },
      { name: 'Filé Americano', desc: 'Pão, carne de sol, ovo, bacon, queijo, presunto, catupiry, cheddar, alface, tomate, milho e batata.', price: 18.00 },
      { name: 'Filé De Frango', desc: 'Pão, filé de frango, ovo, queijo, presunto, cheddar, alface, tomate, milho e batata.', price: 16.00 },
      { name: 'X Coração', desc: 'Pão, coração de galinha, ovo, queijo coalho, catupiry, cebola, alface, tomate, milho e batata.', price: 16.00 },
      { name: 'X Calabresa', desc: 'Pão, calabresa, ovo, queijo coalho, cebola, catupiry, alface, tomate, milho e batata.', price: 15.00 },
      { name: 'Filé De Camarão', desc: 'Pão, filé de camarão, ovo, queijo mussarela, cheddar, alface, tomate, milho e batata.', price: 20.00 },
      { name: 'Big Brother', desc: 'Pão duplo, 2 hambúrgueres, 2 ovos, salsicha, bacon, 2 queijos, 2 presuntos, catupiry, alface, tomate, milho e batata.', price: 25.00 }
    ],
    megadog: [
      { name: 'Mega Dog De Carne', desc: 'Hot Dog Pão Brioche, 2 Salsichas, Carne Moída, Milho, Batata Palha E Cheddar.', price: 12.00 },
      { name: 'Mega Dog Coração', desc: 'Hot Dog Pão Australiano, 2 Salsichas, Coração De Galinha, Milho, Catupiry, Batata Palha.', price: 16.00 },
      { name: 'Mega Dog Bacon', desc: 'Hot Dog Pão Brioche Com Gergelim, 2 Salsichas, Bacon, Catupiry, Milho, Batata Palha E Queijo Mussarela.', price: 15.00 },
      { name: 'Mega Dog De Frango', desc: 'Hot Dog Pão Brioche, 2 Salsichas, Creme De Frango, Milho, Batata Palha E Catupiry.', price: 12.00 },
      { name: 'Mega Dog Especial', desc: 'Hot Dog Pão De Queijo, 2 Salsichas, Filé De Carne, Molho Barbecue, Milho E Batata Palha.', price: 17.00 },
      { name: 'Mega Dog Calabresa', desc: 'Hot Dog Pão Brioche Com Gergelim, 2 Salsichas, Calabresa, Queijo Coalho, Milho Batata Palha.', price: 15.00 },
      { name: 'Mega Dog Cartola', desc: 'Hot Dog Pão Australiano, Banana Frita, Nutella, Queijo Mussarela, Canela, Calda De Chocolate.', price: 15.00 },
      { name: 'Mega Dog Franbacon', desc: 'Hot Dog Pão De Queijo, 2 Salsichas, Frango, Bacon, Cheddar, Milho, Batata Palha.', price: 17.00 },
      { name: 'Mega Dog Camarão', desc: 'Hot Dog Pão Australiano, 2 Salsichas, Camarão, Queijo Mussarela, Milho, Batata Palha.', price: 20.00 },
      { name: 'Mega Dog Sertanejo', desc: 'Hot Dog Pão De Queijo, 2 Salsichas, Carne De Sol Na Nata, Queijo Coalho, Vinagrete, Milho, Batata Palha.', price: 18.00 },
      { name: 'Mega Dog Romeu E Julieta', desc: 'Hot Dog Pão De Queijo, Queijo Empanado, Bacon Fatia, Chocolate.', price: 18.00 }
    ],
    torres: [
      { name: 'Batata Carne de Sol na Nata', desc: 'Batata Frita, Carne De Sol Na Nata, Queijo Coalho, Molho Cheddar Ou Catupiry.', price: 58.00 },
      { name: 'Mega Batata Com Calabresa', desc: 'Batata Frita, Calabresa, Molho Cheddar Ou Catupiry.', price: 52.00 },
      { name: 'Mega Batata Com Camarão', desc: 'Batata Frita, Camarão, Molho Cheddar Ou Catupiry.', price: 68.00 },
      { name: 'Mega Batata Com Coração', desc: 'Batata Frita, Coração De Galinha, Molho Cheddar Ou Catupiry.', price: 54.00 },
      { name: 'Mega Batata Mista', desc: 'Coração, camarão, calabresa e carne 400g com queijo.', price: 68.00 },
      { name: 'Mega Batata Catupiry Bacon', desc: 'Batata frita crocante coberta com catupiry e bacon.', price: 25.00 },
      { name: 'Mega Batata Cheddar Bacon', desc: 'Batata frita crocante coberta com cheddar e bacon.', price: 25.00 },
      { name: 'Filé Com Fritas', desc: 'Isca De Carne No Molho, Batata Frita, Salada.', price: 49.90 },
      { name: 'Misto Com Fritas', desc: 'Coração De Galinha, Calabresa, Queijo Coalho, Batata Frita, Salada.', price: 49.90 },
      { name: 'Frango Com Fritas', desc: 'Isca De Frango, Batata Frita, Salada.', price: 49.90 },
      { name: 'Isca De Peixe Com Fritas', desc: 'Isca De Peixe Empanado, Batata Frita, Salada.', price: 49.90 },
      { name: 'Camarão Com Fritas', desc: 'Camarão No Alho E Óleo, Batata Frita, Salada.', price: 59.90 }
    ],
    pasteis: [
      { name: 'Pastel De Queijo', desc: 'Queijo mussarela derretido, massa crocante.', price: 8.00 },
      { name: 'Pastel Pizza', desc: 'Queijo mussarela, presunto, tomate, orégano, massa crocante.', price: 10.00 },
      { name: 'Pastel Frango Com Catupiry', desc: 'Frango desfiado, catupiry cremoso, massa crocante.', price: 10.00 },
      { name: 'Pastel Fran Bacon', desc: 'Frango desfiado, bacon crocante, cheddar, massa crocante.', price: 12.00 },
      { name: 'Pastel De Calabresa', desc: 'Calabresa moída, catupiry, queijo coalho, massa crocante.', price: 12.00 },
      { name: 'Pastel De Bacon', desc: 'Bacon crocante, catupiry, queijo mussarela, massa crocante.', price: 13.00 },
      { name: 'Pastel Nordestino', desc: 'Carne de sol, queijo coalho, catupiry, massa crocante.', price: 15.00 },
      { name: 'Pastel Sertanejo', desc: 'Carne de sol desfiada, nata, queijo de manteiga, massa crocante.', price: 15.00 },
      { name: 'Pastel De Camarão', desc: 'Filé de camarão, queijo mussarela, cheddar, massa crocante.', price: 18.00 },
      { name: 'Pastel Bombadão', desc: 'Carne de sol, frango desfiado, bacon, calabresa, catupiry e queijo.', price: 20.00 }
    ],
    bebidas: [
      { name: 'Açaí Supremo da Casa', desc: 'Açaí cremoso com morango, banana, granola e leite condensado.', price: 22.00 },
      { name: 'Milk Shake Ovomaltine', desc: 'Milkshake super cremoso de Ovomaltine com chantilly.', price: 18.00 },
      { name: 'Milk Shake Morango', desc: 'Milkshake cremoso de morango.', price: 15.00 },
      { name: 'Milk Shake Chocolate', desc: 'Milkshake cremoso de chocolate.', price: 15.00 },
      { name: 'Milk Shake Negresco', desc: 'Milkshake cremoso de biscoito Negresco.', price: 18.00 },
      { name: 'Mega Cartola', desc: 'Pão australiano, banana frita, nutella, queijo mussarela, canela, calda de chocolate.', price: 22.00 },
      { name: 'Mega Romeu e Julieta', desc: 'Pão de queijo, queijo empanado, bacon fatia, chocolate.', price: 27.00 },
      { name: 'Sucos Naturais (Jarra/Copo)', desc: 'Acerola, Cajá, Abacaxi c/ Hortelã, Goiaba, Maracujá, Graviola, Morango, Laranja, Uva ou Limão.', price: 6.00 },
      { name: 'Refrigerante Lata 350ml', desc: 'Coca-Cola, Fanta, Sprite ou Guaraná Antarctica.', price: 6.00 },
      { name: 'Refrigerante 1 Litro', desc: 'Coca-Cola ou Guaraná Antarctica.', price: 10.00 },
      { name: 'Água Mineral c/ Gás', desc: 'Garrafa 500ml.', price: 3.50 }
    ],
    combos: [
      { name: 'Combo Mega', desc: 'Batata frita simples + Refrigerante lata.', price: 15.00 },
      { name: 'Combo Especial', desc: '1 Mega Kids (Pão brioche + artesanal 120g + cheddar) + 1 Batata frita + 1 Refrigerante lata.', price: 25.90 },
      { name: 'Combo Casal', desc: '2 Mega Egg + 1 Batata frita grande + 1 Refrigerante 1 Litro.', price: 49.90 },
      { name: 'Mega Combo Família', desc: '3 Mega Eggs + 1 Refrigerante 1 Litro.', price: 54.00 }
    ]
  };

  // --- Cart State ---
  let cart = [];
  let currentCategory = 'hamburgueres';

  // --- DOM Elements ---
  const menuGrid = document.getElementById('menuGrid');
  const menuTabs = document.querySelectorAll('.menu-tab');
  const searchInput = document.getElementById('menuSearchInput');
  
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const stickyCartBtn = document.getElementById('stickyCartBtn');
  
  const cartCountBadge = document.getElementById('cartCountBadge');
  const stickyCartBadge = document.getElementById('stickyCartBadge');
  const stickyCartTotal = document.getElementById('stickyCartTotal');
  const cartTotalDisplay = document.getElementById('cartTotalDisplay');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const sendWhatsAppOrderBtn = document.getElementById('sendWhatsAppOrderBtn');

  // --- Helper Currency Formatter ---
  const formatCurrency = (val) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // --- Render Menu Items ---
  function renderMenu(category, searchTerm = '') {
    let items = menuItems[category] || menuItems.hamburgueres;
    
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      items = [];
      Object.keys(menuItems).forEach(cat => {
        menuItems[cat].forEach(item => {
          if (item.name.toLowerCase().includes(term) || item.desc.toLowerCase().includes(term)) {
            items.push(item);
          }
        });
      });
    }

    if (items.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted); padding: 40px;">
          <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 12px; display: block;"></i>
          Nenhum item encontrado para "${searchTerm}".
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = items.map(item => `
      <div class="menu-item-card">
        <div>
          <div class="menu-item-header">
            <h4 class="menu-item-name">${item.name}</h4>
            <span class="menu-item-price">${formatCurrency(item.price)}</span>
          </div>
          <p class="menu-item-desc">${item.desc}</p>
        </div>
        <button class="btn btn--primary btn--full add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">
          <i class="fas fa-plus"></i> Adicionar ao Pedido
        </button>
      </div>
    `).join('');

    attachAddToCartListeners();
  }

  // --- Attach Add To Cart Buttons ---
  function attachAddToCartListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const name = btn.getAttribute('data-name');
        const price = parseFloat(btn.getAttribute('data-price'));
        addToCart(name, price);

        // Visual feedback
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        btn.style.background = '#22c55e';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
        }, 1200);
      });
    });
  }

  // --- Cart Functions ---
  function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCartUI();
  }

  function changeQty(name, delta) {
    const item = cart.find(item => item.name === name);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.name !== name);
      }
    }
    updateCartUI();
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartCountBadge.textContent = totalCount;
    stickyCartBadge.textContent = totalCount;
    stickyCartTotal.textContent = formatCurrency(totalPrice);
    cartTotalDisplay.textContent = formatCurrency(totalPrice);

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-msg">
          <i class="fas fa-shopping-basket" style="font-size: 2.5rem; color: rgba(255,255,255,0.2); margin-bottom: 12px; display: block;"></i>
          Seu carrinho está vazio.<br />Adicione hambúrgueres, açaí ou petiscos!
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>${formatCurrency(item.price * item.qty)}</span>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="window.changeCartQty('${item.name}', -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="window.changeCartQty('${item.name}', 1)">+</button>
          </div>
        </div>
      `).join('');
    }
  }

  // Expose changeCartQty globally for inline onclick
  window.changeCartQty = changeQty;

  // --- Cart Drawer Toggle ---
  function openCart() {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
  }

  function closeCart() {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
  }

  openCartBtn.addEventListener('click', openCart);
  stickyCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // --- Send WhatsApp Order ---
  sendWhatsAppOrderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio! Adicione itens antes de enviar o pedido.');
      return;
    }

    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const clientName = document.getElementById('clientNameInput').value.trim() || 'Cliente';
    const clientAddress = document.getElementById('clientAddressInput').value.trim() || 'Não informado';
    
    let text = `🥟 *NOVO PEDIDO - O RECANTO DO SABOR (LANCHONETE & PASTELARIA)*\n\n`;
    text += `👤 *Nome:* ${clientName}\n`;
    text += `📍 *Forma:* ${deliveryType} (${clientAddress})\n\n`;
    text += `📋 *ITENS DO PEDIDO:*\n`;

    cart.forEach(item => {
      text += `• ${item.qty}x ${item.name} (${formatCurrency(item.price * item.qty)})\n`;
    });

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    text += `\n💰 *TOTAL:* ${formatCurrency(totalPrice)}\n\n`;
    text += `Obrigado! Aguardo a confirmação do pedido.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5584999990000?text=${encodedText}`, '_blank');
  });

  // --- Menu Tabs Listener ---
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      searchInput.value = '';
      renderMenu(currentCategory);
    });
  });

  // --- Search Input Listener ---
  searchInput.addEventListener('input', (e) => {
    renderMenu(currentCategory, e.target.value);
  });

  // --- Mobile Hamburger Navigation ---
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

  // --- Header Scroll Shadow ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // --- Favorite Heart Button Toggle ---
  document.querySelectorAll('.special-card__fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        btn.style.background = '#e11d48';
      } else {
        btn.style.background = '';
      }
    });
  });

  // Initial Render
  renderMenu('hamburgueres');
  updateCartUI();

});
