// Sosyal ikonlara animasyon ekleme
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('animate__animated', 'animate__pulse');
  });
  icon.addEventListener('animationend', () => {
    icon.classList.remove('animate__animated', 'animate__pulse');
  });
});

// Navbar Bileşeni
class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
        <img src="resimler/logo.jpg" alt="Logo" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <span class="ms-2" style="font-size: 1.2rem; font-weight: 700; color: #ffc107;">Kayseri Hijyen Temizlik</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="index.html">Anasayfa</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Kurumsal</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="hakkımızda.html">Hakkımızda</a></li>
              <li><a class="dropdown-item" href="referanslar.html">Referanslarımız</a></li>
              <li><a class="dropdown-item" href="musteri-yorumlari.html">Müşteri Görüşleri</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Hizmetler</a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="ev-temizligi.html">Ev Temizliği</a></li>
              <li><a class="dropdown-item" href="ofis-temizligi.html">Ofis Temizliği</a></li>
              <li><a class="dropdown-item" href="insaat-temizligi.html">İnşaat Sonrası Temizliği</a></li>
              <li><a class="dropdown-item" href="hastane_temizligi.html">Hastane Temizliği</a></li>
              <li><a class="dropdown-item" href="dezenfeksiyon.html">Dezenfeksiyon İşlemi</a></li>
              <li><a class="dropdown-item" href="fabrika.html">Fabrika Temizliği</a></li>
              <li><a class="dropdown-item" href="yurt-temizligi.html">Yurt Temizliği</a></li>
              <li><a class="dropdown-item" href="villa-temizligi.html">Villa Temizliği</a></li>
              <li><a class="dropdown-item" href="dıs-cephe-temizligi.html">Dış Cephe Temizliği</a></li>
              <li><a class="dropdown-item" href="zemin-temizligi.html">Zemin Temizliği</a></li>
              <li><a class="dropdown-item" href="idari-bina-temizligi.html">İdari Bina Temizliği</a></li>
              <li><a class="dropdown-item" href="profesyonel-cam-temizliği.html">Profesyonel Cam Temizliği</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="galeri.html">Galeri</a></li>
          <li class="nav-item"><a class="nav-link" href="iletisim.html">İletişim</a></li>
        </ul>
      </div>

      <div class="social-icons d-flex align-items-center ms-auto">
        <a href="https://www.instagram.com/kayserihijyentemizlik" target="_blank" class="mx-2 text-warning"><i class="fab fa-instagram"></i></a>
        <a href="mailto:kayserihijyentemizlik@gmail.com" class="mx-2 text-warning"><i class="fas fa-envelope"></i></a>
        <a href="tel:+905411735233" class="mx-2 text-warning"><i class="fas fa-phone-alt"></i></a>
      </div>
    </nav>
    `;
  }
}
customElements.define('main-navbar', Navbar);

// Footer Bileşeni
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer bg-dark text-white pt-5 pb-2">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <a href="#" class="d-flex align-items-center mb-3 text-decoration-none">
              <img src="resimler/logo.jpg" alt="Logo" class="footer-logo rounded-circle me-2" style="width:40px; height:40px; object-fit:cover;">
              <span class="fs-5 fw-bold text-warning">Kayseri Hijyen Temizlik</span>
            </a>
            <p class="small">Temizlikte güven, kalite ve profesyonellik. Yaşam alanlarınızı parlak ve hijyenik tutuyoruz.</p>
          </div>

          <div class="col-md-3 mb-4">
            <h6 class="text-warning mb-3">Hızlı Linkler</h6>
            <ul class="list-unstyled small">
              <li><a href="index.html" class="text-white-50 text-decoration-none">Anasayfa</a></li>
              <li><a href="hakkımızda.html" class="text-white-50 text-decoration-none">Hakkımızda</a></li>
              <li><a href="iletisim.html" class="text-white-50 text-decoration-none">İletişim</a></li>
            </ul>
          </div>

          <div class="col-md-5 mb-4">
            <h6 class="text-warning mb-3">İletişim Bilgileri</h6>
            <p class="small mb-1"><i class="fas fa-map-marker-alt me-2 text-warning"></i>Melikgazi / KAYSERİ</p>
            <p class="small mb-1"><i class="fas fa-phone-alt me-2 text-warning"></i><a href="tel:+905411735233" style="color:inherit; text-decoration:none;">+90 541 173 52 33</a></p>
            <p class="small"><i class="fas fa-envelope me-2 text-warning"></i><a href="mailto:kayserihijyentemizlik@gmail.com" style="color:inherit; text-decoration:none;">kayserihijyentemizlik@gmail.com</a></p>
          </div>
        </div>
        <hr class="border-warning my-3" />
        <div class="text-center pb-2">
          <small class="text-white-50">Copyright © 2026 Kayseri Hijyen Temizlik. Tüm Hakları Saklıdır.</small>
        </div>
      </div>
    </footer>
    `;
  }
}
customElements.define('main-footer', Footer);

// WhatsApp Butonu
class WhatsAppButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="https://wa.me/905411735233" target="_blank" aria-label="WhatsApp"
         style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: #25d366; color: white; width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; text-decoration: none; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
        <i class="fab fa-whatsapp"></i>
      </a>
    `;
  }
}
customElements.define('whatsapp-button', WhatsAppButton);