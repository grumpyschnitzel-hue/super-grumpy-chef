/* Super Grumpy Chef — main.js */
'use strict';

// ─── Dark/Light Mode Toggle ───────────────────────────────────────────────────
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = root.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function setTheme(t) {
    theme = t;
    root.setAttribute('data-theme', t);
    if (toggle) {
      toggle.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} mode`);
      toggle.innerHTML = t === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  setTheme(theme);
  if (toggle) toggle.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
})();

// ─── Menu Data ────────────────────────────────────────────────────────────────
const menuItems = [
  { name: 'Bone Marrow Bruschetta', category: 'starters', price: 16, desc: 'Roasted marrow, herb gremolata, toasted sourdough', tags: [] },
  { name: 'Burrata & Heirloom Tomato', category: 'starters', price: 18, desc: 'Aged balsamic, basil oil, sea salt', tags: ['V', 'GF'] },
  { name: 'Smoked Duck Gyoza', category: 'starters', price: 17, desc: 'House-smoked duck, yuzu soy, crispy shallot', tags: [] },
  { name: 'Pan-Seared Duck Breast', category: 'mains', price: 38, desc: 'Cherry jus, celeriac purée, wilted greens', tags: [] },
  { name: 'Wild Mushroom Risotto', category: 'mains', price: 32, desc: 'Porcini, truffle, aged parmigiano', tags: ['V', 'GF'] },
  { name: 'Dry-Aged Ribeye 300g', category: 'mains', price: 54, desc: '45-day dry-aged, café de Paris butter, hand-cut fries', tags: ['GF'] },
  { name: 'Bitter Chocolate Tart', category: 'desserts', price: 14, desc: '72% dark chocolate, salted caramel, crème fraîche', tags: ['GF'] },
  { name: 'Seasonal Cheese Board', category: 'desserts', price: 22, desc: 'Three artisan cheeses, quince, honeycomb, sourdough crackers', tags: ['V'] },
  { name: 'Smoked Negroni', category: 'drinks', price: 18, desc: 'House-smoked gin, Campari, sweet vermouth, orange', tags: [] },
  { name: 'Natural Wine (Glass)', category: 'drinks', price: 14, desc: 'Rotating selection — ask your server', tags: ['V', 'GF'] },
];

// ─── Menu Rendering ───────────────────────────────────────────────────────────
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const items = filter === 'all' ? menuItems : menuItems.filter(i => i.category === filter);

  grid.innerHTML = items.map(item => `
    <article class="menu-card" data-category="${item.category}">
      <h3>${item.name}</h3>
      <p class="desc">${item.desc}</p>
      <div class="menu-card-footer">
        <span class="price">$${item.price}</span>
        <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}</div>
      </div>
    </article>
  `).join('');
}

renderMenu();

// ─── Menu Filter Tabs ─────────────────────────────────────────────────────────
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderMenu(tab.dataset.filter);
  });
});

// ─── Reservation Form ─────────────────────────────────────────────────────────
const form = document.getElementById('reservation-form');
const confirm = document.getElementById('reservation-confirm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    // Basic validation
    let valid = true;
    ['name', 'date', 'time'].forEach(field => {
      const el = form.elements[field];
      if (!el || !el.value.trim()) {
        el.style.borderColor = 'var(--color-error)';
        valid = false;
      } else {
        el.style.borderColor = '';
      }
    });

    if (!valid) return;

    console.log('Reservation request:', data);
    form.hidden = true;
    if (confirm) confirm.hidden = false;
  });
}
