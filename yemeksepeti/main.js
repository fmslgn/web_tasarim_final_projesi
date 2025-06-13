document.addEventListener('DOMContentLoaded', function() { // Sayfa yüklendiğinde ana içeriği oluşturur
  const root = document.getElementById('root'); // Ana kapsayıcıyı seçer
  root.innerHTML = ''; // Önceki içeriği temizler
  root.appendChild(createHeader()); // Header ekler
  const main = document.createElement('main'); // Main alanı oluşturur
  main.appendChild(createHeroSection()); // Hero bölümü ekler
  main.appendChild(createCategoriesSection()); // Kategoriler bölümü ekler
  main.appendChild(createPopularFoodsSection()); // Popüler yemekler bölümü ekler
  main.appendChild(createFeaturedRestaurantsSection()); // Restoranlar bölümü ekler
  main.appendChild(createCitiesSection()); // Şehirler bölümü ekler
  main.appendChild(createFeaturesSection()); // Özellikler bölümü ekler
  root.appendChild(main); // Main'i ekler
  root.appendChild(createFooter()); // Footer ekler
  addCityCardEvents(); // Şehir kartlarına tıklama olayı ekler
});

function createHeader() { // Header (üst menü) oluşturur
  const header = document.createElement('header'); // Header etiketi
  header.className = 'header'; // Sınıf ataması
  // Logo (tıklanabilir)
  const logo = document.createElement('div'); // Logo alanı
  logo.className = 'logo';
  logo.textContent = 'YemekSepeti';
  logo.style.cursor = 'pointer';
  logo.onclick = function() { // Logoya tıklayınca ana sayfaya döner
    location.reload();
  };

  // Menü
  const nav = document.createElement('nav'); // Menü alanı
  nav.className = 'nav';
  ['Ana Sayfa', 'Restoranlar', 'Kategoriler', 'Hakkımızda'].forEach(text => {
    const a = document.createElement('a'); // Menü linki
    a.href = '#';
    a.textContent = text;
    nav.appendChild(a);
  });

  // Sağ üst butonlar ve ikonlar
  const right = document.createElement('div'); // Sağ üst alan
  right.className = 'header-right';
  // Giriş Yap butonu
  const loginBtn = document.createElement('button');
  loginBtn.className = 'login-btn';
  loginBtn.textContent = 'Giriş Yap';
  // Ücretsiz teslimat için kaydolun butonu
  const signupBtn = document.createElement('button');
  signupBtn.className = 'signup-btn';
  signupBtn.textContent = 'Ücretsiz teslimat için kaydolun';
  // Dil seçici
  const langDiv = document.createElement('div');
  langDiv.className = 'lang-select';
  const globe = document.createElement('span');
  globe.className = 'lang-icon';
  globe.innerHTML = '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>';
  const langText = document.createElement('span');
  langText.textContent = 'TR';
  langText.style.margin = '0 4px';
  const arrow = document.createElement('span');
  arrow.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
  langDiv.appendChild(globe); // Dünya ikonu
  langDiv.appendChild(langText); // Dil kodu
  langDiv.appendChild(arrow); // Aşağı ok
  // Sepet butonu (pasif)
  const cartBtn = document.createElement('button');
  cartBtn.className = 'cart-btn';
  cartBtn.disabled = true;
  cartBtn.innerHTML = '<svg width="22" height="22" fill="none" stroke="#ccc" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
  // Sıralama
  right.appendChild(loginBtn); // Giriş butonu ekle
  right.appendChild(signupBtn); // Kayıt butonu ekle
  right.appendChild(langDiv); // Dil seçici ekle
  right.appendChild(cartBtn); // Sepet butonu ekle

  header.appendChild(logo); // Logoyu ekle
  header.appendChild(nav); // Menü ekle
  header.appendChild(right); // Sağ üstü ekle
  return header; // Header döndür
}

function createFooter() { // Footer (alt bilgi) oluşturur
  const footer = document.createElement('footer'); // Footer etiketi
  footer.className = 'footer'; // Sınıf ataması
  const div = document.createElement('div'); // İçerik alanı
  div.textContent = '© 2025 YemekSepeti. Tüm hakları saklıdır.'; // Telif metni
  footer.appendChild(div); // İçeriği ekle
  return footer; // Footer döndür
}

function createHeroSection() { // Ana sayfa üstü tanıtım bölümü
  const section = document.createElement('section'); // Section etiketi
  section.className = 'hero'; // Sınıf ataması
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Lezzetin Kapında <span class="highlight">Hızlı Teslimatla!</span>'; // Başlık
  const p = document.createElement('p');
  p.textContent = 'En sevdiğin restoranlardan binlerce lezzeti kapına kadar getiriyoruz'; // Açıklama
  const searchBar = document.createElement('div');
  searchBar.className = 'search-bar'; // Arama çubuğu alanı
  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.placeholder = 'Konum seçin'; // Konum girişi
  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.placeholder = 'Restoran veya yemek ara...'; // Arama girişi
  const button = document.createElement('button');
  button.textContent = 'Ara'; // Arama butonu
  searchBar.appendChild(input1);
  searchBar.appendChild(input2);
  searchBar.appendChild(button);
  section.appendChild(h1);
  section.appendChild(p);
  section.appendChild(searchBar);
  return section;
}

function createCategoriesSection() { // Popüler kategoriler bölümü
  const section = document.createElement('section');
  section.className = 'categories';
  const h2 = document.createElement('h2');
  h2.textContent = 'Popüler Kategoriler';
  section.appendChild(h2);
  const list = document.createElement('div');
  list.className = 'category-list';
  const categories = [
    '🍕 Pizza', '☕ Kahve', '🥩 Et Yemekleri', '🍔 Burger',
    '🍪 Tatlı', '🥗 Salata', '🥣 Çorba', '🍦 Dondurma'
  ];
  categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'category';
    div.textContent = cat; // Kategori adı ve ikonu
    list.appendChild(div);
  });
  section.appendChild(list);
  return section;
}

function createPopularFoodsSection() { // Popüler yemekler bölümü
  const section = document.createElement('section');
  section.className = 'popular-foods';
  const h2 = document.createElement('h2');
  h2.textContent = 'Popüler Lezzetler';
  section.appendChild(h2);
  const list = document.createElement('div');
  list.className = 'food-list';
  const foods = [
    {
      img: 'assets/margherita-pizza.jpg',
      title: 'Margherita Pizza',
      restaurant: 'İtalyan Lezzeti',
      price: '45₺',
      original: '60₺'
    },
    {
      img: 'assets/cheeseburger-menu.jpg',
      title: 'Cheeseburger Menu',
      restaurant: 'Burger House',
      price: '35₺',
      original: null
    }
    // ... Diğer yemekler ...
  ];
  foods.forEach(f => {
    const card = document.createElement('div'); // Yemek kartı
    card.className = 'food-card';
    const img = document.createElement('img');
    img.src = f.img; // Görsel
    img.alt = f.title;
    card.appendChild(img);
    const info = document.createElement('div');
    info.className = 'food-info';
    const title = document.createElement('div');
    title.className = 'food-title';
    title.textContent = f.title; // Yemek adı
    info.appendChild(title);
    const rest = document.createElement('div');
    rest.className = 'food-restaurant';
    rest.textContent = f.restaurant; // Restoran adı
    info.appendChild(rest);
    const price = document.createElement('div');
    price.className = 'food-price';
    price.textContent = f.price; // Fiyat
    if (f.original) { // İndirimli fiyat varsa
      const orig = document.createElement('span');
      orig.className = 'food-original-price';
      orig.textContent = f.original;
      price.appendChild(document.createTextNode(' '));
      price.appendChild(orig);
    }
    info.appendChild(price);
    card.appendChild(info);
    list.appendChild(card);
  });
  section.appendChild(list);
  return section;
}

function createFeaturedRestaurantsSection() { // Öne çıkan restoranlar bölümü
  const section = document.createElement('section');
  section.className = 'featured-restaurants';
  const h2 = document.createElement('h2');
  h2.textContent = 'Öne Çıkan Restoranlar';
  section.appendChild(h2);
  const list = document.createElement('div');
  list.className = 'restaurant-list';
  const restaurants = [
    {
      img: 'assets/pizza-palace.jpg',
      title: 'Pizza Palace',
      cuisine: 'İtalyan Mutfağı',
      rating: '4.8 ⭐'
    },
    {
      img: 'assets/burger-station.jpg',
      title: 'Burger Station',
      cuisine: 'Fast Food',
      rating: '4.6 ⭐'
    }
    // ... Diğer restoranlar ...
  ];
  restaurants.forEach(r => {
    const card = document.createElement('div'); // Restoran kartı
    card.className = 'restaurant-card';
    const img = document.createElement('img');
    img.src = r.img; // Görsel
    img.alt = r.title;
    card.appendChild(img);
    const info = document.createElement('div');
    info.className = 'restaurant-info';
    const title = document.createElement('div');
    title.className = 'restaurant-title';
    title.textContent = r.title; // Restoran adı
    const cuisine = document.createElement('div');
    cuisine.className = 'restaurant-cuisine';
    cuisine.textContent = r.cuisine; // Mutfak türü
    const rating = document.createElement('div');
    rating.className = 'restaurant-rating';
    rating.textContent = r.rating; // Puan
    info.appendChild(title);
    info.appendChild(cuisine);
    info.appendChild(rating);
    card.appendChild(info);
    list.appendChild(card);
  });
  section.appendChild(list);
  return section;
}

function createCitiesSection() { // Şehirler bölümü
  const section = document.createElement('section');
  section.className = 'cities';
  const h2 = document.createElement('h2');
  h2.textContent = "Türkiye'nin her şehrindeyiz!";
  section.appendChild(h2);
  const list = document.createElement('div');
  list.className = 'city-list';
  const cities = [
    { img: 'assets/ankara.jpg', name: 'Ankara' },
    { img: 'assets/antalya.jpg', name: 'Antalya' },
    { img: 'assets/kastamonu-cide.jpg', name: 'Kastamonu Cide' },
    { img: 'assets/istanbul.jpg', name: 'İstanbul' }
  ];
  cities.forEach(c => {
    const card = document.createElement('div'); // Şehir kartı
    card.className = 'city-card';
    const img = document.createElement('img');
    img.src = c.img; // Şehir görseli
    img.alt = c.name;
    const label = document.createElement('div');
    label.className = 'city-label';
    label.textContent = c.name; // Şehir adı
    card.appendChild(img);
    card.appendChild(label);
    list.appendChild(card);
  });
  section.appendChild(list);
  return section;
}

function createFeaturesSection() { // Neden YemekSepeti? özellikler bölümü
  const section = document.createElement('section');
  section.className = 'features';
  const h2 = document.createElement('h2');
  h2.textContent = 'Neden YemekSepeti?';
  section.appendChild(h2);
  const list = document.createElement('div');
  list.className = 'feature-list';
  const features = [
    { icon: '⏱️', title: 'Hızlı Teslimat', desc: 'Ortalama 30 dakikada kapınızda' },
    { icon: '🔒', title: 'Güvenli Ödeme', desc: 'SSL sertifikası ile korumalı' },
    { icon: '🚚', title: 'Ücretsiz Kargo', desc: '50₺ üzeri siparişlerde' },
    { icon: '⭐', title: 'Kalite Garantisi', desc: '5 yıldızlı müşteri memnuniyeti' }
  ];
  features.forEach(f => {
    const feature = document.createElement('div'); // Özellik kartı
    feature.className = 'feature';
    const icon = document.createElement('div');
    icon.className = 'feature-icon';
    icon.textContent = f.icon; // İkon
    const title = document.createElement('div');
    title.className = 'feature-title';
    title.textContent = f.title; // Başlık
    const desc = document.createElement('div');
    desc.className = 'feature-desc';
    desc.textContent = f.desc; // Açıklama
    feature.appendChild(icon);
    feature.appendChild(title);
    feature.appendChild(desc);
    list.appendChild(feature);
  });
  section.appendChild(list);
  return section;
}

function addCityCardEvents() { // Şehir kartlarına tıklama olayı ekler
  document.querySelectorAll('.city-card').forEach(function(card) {
    const label = card.querySelector('.city-label');
    if(label && label.textContent.trim() === 'Kastamonu Cide') { // Sadece Kastamonu Cide için
      card.style.cursor = 'pointer';
      card.addEventListener('click', function() {
        renderKastamonuCidePage(); // Detay sayfasını açar
      });
    }
  });
}

function renderKastamonuCidePage() { // Kastamonu Cide detay sayfasını oluşturur
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(createHeaderWithBack()); // Geri butonlu header
  const main = document.createElement('main');
  main.appendChild(createKastamonuCideHero()); // Hero
  main.appendChild(createKastamonuCideBreadcrumb()); // Breadcrumb
  main.appendChild(createKastamonuCideTitle()); // Başlık
  main.appendChild(createKastamonuCideList()); // Restoran listesi
  root.appendChild(main);
  root.appendChild(createFooter()); // Footer
  addBackHomeEvents(); // Geri dönüş olayları
}

function createHeaderWithBack() { // Detay sayfası için header (geri butonlu)
  const header = document.createElement('header');
  header.className = 'header';
  // Logo (tıklanabilir)
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'YemekSepeti';
  logo.style.cursor = 'pointer';
  logo.onclick = function() {
    location.reload(); // Logoya tıklayınca ana sayfa
  };
  const nav = document.createElement('nav');
  nav.className = 'nav';
  const a = document.createElement('a');
  a.href = '#';
  a.id = 'back-home';
  a.textContent = 'Ana Sayfa'; // Geri butonu
  nav.appendChild(a);

  // Sağ üst butonlar ve ikonlar (Aynı ana sayfadaki gibi)
  const right = document.createElement('div');
  right.className = 'header-right';
  // Giriş Yap butonu
  const loginBtn = document.createElement('button');
  loginBtn.className = 'login-btn';
  loginBtn.textContent = 'Giriş Yap';
  // Ücretsiz teslimat için kaydolun butonu
  const signupBtn = document.createElement('button');
  signupBtn.className = 'signup-btn';
  signupBtn.textContent = 'Ücretsiz teslimat için kaydolun';
  // Dil seçici
  const langDiv = document.createElement('div');
  langDiv.className = 'lang-select';
  const globe = document.createElement('span');
  globe.className = 'lang-icon';
  globe.innerHTML = '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>';
  const langText = document.createElement('span');
  langText.textContent = 'TR';
  langText.style.margin = '0 4px';
  const arrow = document.createElement('span');
  arrow.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
  langDiv.appendChild(globe);
  langDiv.appendChild(langText);
  langDiv.appendChild(arrow);
  // Sepet butonu (pasif)
  const cartBtn = document.createElement('button');
  cartBtn.className = 'cart-btn';
  cartBtn.disabled = true;
  cartBtn.innerHTML = '<svg width="22" height="22" fill="none" stroke="#ccc" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
  // Sıralama
  right.appendChild(loginBtn);
  right.appendChild(signupBtn);
  right.appendChild(langDiv);
  right.appendChild(cartBtn);

  header.appendChild(logo);
  header.appendChild(nav);
  header.appendChild(right);
  return header;
}

function createKastamonuCideHero() { // Kastamonu Cide detay sayfası üst görsel/bölüm
  const section = document.createElement('section');
  section.className = 'city-hero';
  const h1 = document.createElement('h1');
  h1.textContent = 'Kastamonu Cide Online Yemek Siparişi'; // Başlık
  section.appendChild(h1);
  return section;
}

function createKastamonuCideBreadcrumb() { // Kastamonu Cide için breadcrumb (navigasyon)
  const div = document.createElement('div');
  div.className = 'breadcrumb';
  const a = document.createElement('a');
  a.href = '#';
  a.id = 'breadcrumb-home';
  a.textContent = 'Anasayfa'; // Ana sayfa linki
  const span1 = document.createElement('span');
  span1.textContent = '›'; // Ayraç
  const span2 = document.createElement('span');
  span2.textContent = 'Kastamonu Cide'; // Aktif sayfa
  div.appendChild(a);
  div.appendChild(span1);
  div.appendChild(span2);
  return div;
}

function createKastamonuCideTitle() { // Restoranlar başlığı
  const h2 = document.createElement('h2');
  h2.className = 'city-rest-title';
  h2.textContent = 'Tüm Restoranlar';
  return h2;
}

function createKastamonuCideList() { // Kastamonu Cide restoran listesi
  const list = document.createElement('div');
  list.className = 'city-rest-list';
  const restaurants = [
    {
      badges: [
        { text: 'Seçili ürünlerde %30', class: 'badge badge-red' },
        { text: 'YeClub Restoranı', class: 'badge badge-pink' }
      ],
      img: 'assets/cetinin-dunyasi.jpg',
      name: 'Çetinin Dünyası',
      desc: '120 TL minimum • Köfte',
      rating: '1.2 (5)'
    },
    {
      badges: [
        { text: 'Tüm ürünlerde %20', class: 'badge badge-red' }
      ],
      img: 'assets/tata-kunefe.jpg',
      name: 'Tata Künefe',
      desc: '0 TL minimum • Künefe',
      rating: '4.4 (3000+)'
    },
    {
      badges: [
        { text: 'Tüm ürünlerde %15', class: 'badge badge-red' },
        { text: 'YeClub Restoranı', class: 'badge badge-pink' }
      ],
      img: 'assets/di-doner.jpg',
      name: 'Di Döner',
      desc: '120 TL minimum • Tost & Sandviç',
      rating: '4.3 (1000+)'
    }
  ];
  restaurants.forEach(r => {
    const card = document.createElement('div'); // Restoran kartı
    card.className = 'city-rest-card';
    const badges = document.createElement('div');
    badges.className = 'city-rest-badges';
    r.badges.forEach(b => {
      const span = document.createElement('span');
      span.className = b.class; // Rozet rengi
      span.textContent = b.text; // Rozet metni
      badges.appendChild(span);
    });
    card.appendChild(badges);
    const img = document.createElement('img');
    img.src = r.img; // Restoran görseli
    img.alt = r.name;
    card.appendChild(img);
    const info = document.createElement('div');
    info.className = 'city-rest-info';
    const name = document.createElement('div');
    name.className = 'city-rest-name';
    name.textContent = r.name; // Restoran adı
    const desc = document.createElement('div');
    desc.className = 'city-rest-desc';
    desc.textContent = r.desc; // Açıklama
    const rating = document.createElement('div');
    rating.className = 'city-rest-rating';
    const star = document.createElement('span');
    star.className = 'star';
    star.textContent = '★'; // Yıldız ikonu
    rating.appendChild(star);
    rating.appendChild(document.createTextNode(' ' + r.rating)); // Puan
    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(rating);
    card.appendChild(info);
    list.appendChild(card);
  });
  return list;
}

function addBackHomeEvents() { // Detay sayfasında geri dönüş olayları
  document.getElementById('back-home')?.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload(); // Ana sayfaya döner
  });
  document.getElementById('breadcrumb-home')?.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload(); // Ana sayfaya döner
  });
}
