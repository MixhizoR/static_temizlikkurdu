// Bootstrap dropdown otomatik çalışıyor.
// Sosyal ikonlara ufak animasyon ekleyelim.
//üst navbar kodları
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('animate__animated', 'animate__pulse');
  });
  icon.addEventListener('animationend', () => {
    icon.classList.remove('animate__animated', 'animate__pulse');
  });
});
//üst navbar kodları bitiyor


// Navbar Component
class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="resimler/logo.jpg" alt="Logo">
      <span>Temizlik Kurdu</span>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="index.html">Anasayfa</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Kurumsal </a>
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
            <li><a class="dropdown-item" href="hastane_temizligi.html">Hastane Temizliği </a></li>
            <li><a class="dropdown-item" href="dezenfeksiyon.html">Dezenfeksiyon işlemi </a></li>
            <li><a class="dropdown-item" href="fabrika.html">Fabrika Temizliği</a></li>
            <li><a class="dropdown-item" href="yurt-temizligi.html">Yurt Temizliği</a></li>
            <li><a class="dropdown-item" href="villa-temizligi.html">Villa Temizliği </a></li>
            <li><a class="dropdown-item" href="dıs-cephe-temizligi.html">Dış Cephe Temizliği</a></li>
            <li><a class="dropdown-item" href="zemin-temizligi.html">Zemin Temizliği</a></li>
            <li><a class="dropdown-item" href="idari-bina-temizligi.html">İdari Bina Temizliği </a></li>
            <li><a class="dropdown-item" href="profesyonel-cam-temizliği.html">Profesyonel Cam Temizliği</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="galeri.html">Galeri</a></li>
        <li class="nav-item"><a class="nav-link" href="iletisim.html">İletişim</a></li>
      </ul>
    </div>

    <div class="social-icons d-flex align-items-center ms-auto">
      <a href="https://www.instagram.com/temizlikkurdu38"><i class="fab fa-instagram"></i></a>
      <a href="mailto:temizlikkurdu38@gmail.com"><i class="fas fa-envelope"></i></a>
      <a href="tel:+905411735233"><i class="fas fa-phone-alt"></i></a>
    </div>
  </nav>
      `;
  }
}
customElements.define('main-navbar', Navbar);

// Footer Component
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <footer class="footer bg-dark text-white pt-5 pb-4">
    <div class="container">
      <div class="row">

        <!-- Logo & Kısa Açıklama -->
        <div class="col-md-4 mb-4">
          <a href="#" class="d-flex align-items-center mb-3 text-decoration-none">
            <img src="resimler/logo.jpg" alt="Temizlik Kurdu Logo" class="footer-logo rounded-circle me-2" />
            <span class="fs-4 fw-bold text-warning">Temizlik Kurdu</span>
          </a>
          <p>
            Temizlikte güven, kalite ve profesyonellik. Yaşam alanlarınızı parlak ve hijyenik tutuyoruz.
          </p>
        </div>

        <!-- Hızlı Linkler -->
        <div class="col-md-3 mb-4">
          <h5 class="text-warning mb-3">Hızlı Linkler</h5>
          <ul class="list-unstyled">
            <li><a href="index.html" class="footer-link">Anasayfa</a></li>
            <li><a href="hakkımızda.html" class="footer-link">Hakkımızda</a></li>
            <li><a href="musteri-yorumlari.html" class="footer-link">Müşteri Görüşleri</a></li>
            <li><a href="iletisim.html" class="footer-link">İletişim</a></li>
            <li><a href="galeri.html" class="footer-link">Galeri</a></li>
          </ul>
        </div>

        <!-- İletişim Bilgileri -->
        <div class="col-md-5 mb-4">
          <h5 class="text-warning mb-3">İletişim</h5>
          <p><i class="fas fa-map-marker-alt me-2"></i>Selçuklu Mah. İmamoğlu Sk. No:31/2 Melikgazi / KAYSERİ</p>
          <p><i class="fas fa-phone-alt me-2"></i><a href="tel:+905411735233" class="footer-link">+90 541 173 52 33</a>
          </p>
          <p><i class="fas fa-envelope me-2"></i><a href="mailto:temizlikkurdu38@gmail.com"
              class="footer-link">temizlikkurdu38@gmail.com</a></p>

          <div class="social-icons mt-3">
            <a href="https://www.instagram.com/temizlikkurdu38" class="social-link me-3"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>

      <hr class="border-warning" />

      <div class="text-center small">
        &copy; 2025 Temizlik Kurdu. Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
      `;
  }
}
customElements.define('main-footer', Footer);

class WhatsAppButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="https://wa.me/905411735233" target="_blank" aria-label="WhatsApp"
    class="contact-btn whatsapp-btn fixed-contact-buttons">
    <i class="fab fa-whatsapp"></i>
  </a>
    `;
  }
}
customElements.define('whatsapp-button', WhatsAppButton);