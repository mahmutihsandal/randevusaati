const galleries = {
  user: {
    label: "Kullanıcı akışı",
    screens: [
      {
        tag: "L0",
        title: "Açılış ekranı",
        src: "./assets/screens/login/00-splash.jpg",
        description: "Uygulama, marka ve salon temalı açılış görseliyle kullanıcıyı karşılar."
      },
      {
        tag: "L1",
        title: "Telefonla giriş",
        src: "./assets/screens/login/01-login.jpg",
        description: "Kullanıcı telefon numarasıyla giriş akışını başlatır."
      },
      {
        tag: "L2",
        title: "OTP doğrulama",
        src: "./assets/screens/login/02-otp.jpg",
        description: "Tek kullanımlık kodla hesap güvenliği tamamlanır."
      },
      {
        tag: "L3",
        title: "Profil bilgileri",
        src: "./assets/screens/login/03-profile.jpg",
        description: "Rezervasyon için gerekli temel kullanıcı bilgileri alınır."
      },
      {
        tag: "L4",
        title: "Salon arama",
        src: "./assets/screens/login/04-shop-search.jpg",
        description: "Kullanıcı hizmet almak istediği işletmeyi listeden seçer."
      },
      {
        tag: "U1",
        title: "Salon vitrini",
        src: "./assets/screens/user/01-home.jpg",
        description: "Salon bilgisi, personeller ve hizmetler tek ana ekranda öne çıkar."
      },
      {
        tag: "U2",
        title: "Personel seçimi",
        src: "./assets/screens/user/02-staff.jpg",
        description: "Kullanıcı randevuyu almak istediği personeli seçer."
      },
      {
        tag: "U3",
        title: "Hizmet seçimi",
        src: "./assets/screens/user/03-service.jpg",
        description: "Hizmetler kategori, süre ve fiyat bilgisiyle sunulur."
      },
      {
        tag: "U4",
        title: "Tarih ve saat",
        src: "./assets/screens/user/04-calendar.jpg",
        description: "Müsait slotlar salonun çalışma düzenine göre gösterilir."
      },
      {
        tag: "U5",
        title: "Randevu onayı",
        src: "./assets/screens/user/05-approved.jpg",
        description: "Seçilen hizmet, personel, tarih ve saat onay ekranında netleşir."
      },
      {
        tag: "U6",
        title: "Geçmiş randevular",
        src: "./assets/screens/user/06-history.jpg",
        description: "Kullanıcı tamamlanan ve geçmiş randevularını takip eder."
      },
      {
        tag: "U7",
        title: "Salon iletişimi",
        src: "./assets/screens/user/07-info.jpg",
        description: "Adres, iletişim ve işletme bilgileri kullanıcı tarafında erişilebilir kalır."
      }
    ]
  },
  setup: {
    label: "İşletme setup akışı",
    screens: [
      {
        tag: "S1",
        title: "İşletme bilgileri",
        src: "./assets/screens/setup/01-shop-info.jpg",
        description: "Dükkan adı, şehir, semt ve konum bağlantısı ilk adımda kaydedilir."
      },
      {
        tag: "S2",
        title: "Personel kaydı",
        src: "./assets/screens/setup/02-staff.jpg",
        description: "Ekip üyeleri telefon ve ad bilgileriyle işletmeye eklenir."
      },
      {
        tag: "S3",
        title: "İşletme tipi",
        src: "./assets/screens/setup/03-business-type.jpg",
        description: "Kadın kuaförü, erkek kuaförü, güzellik merkezi veya karma işletme tipi seçilir."
      },
      {
        tag: "S4",
        title: "Randevu süresi",
        src: "./assets/screens/setup/04-duration.jpg",
        description: "Temel hizmet süresi seçilir ve örnek randevu saatleri anında gösterilir."
      },
      {
        tag: "S5",
        title: "Çalışma düzeni",
        src: "./assets/screens/setup/05-schedule.jpg",
        description: "Açık günler, çalışma saatleri ve mola saatleri işletme programını oluşturur."
      },
      {
        tag: "S6",
        title: "Hizmet tercihleri",
        src: "./assets/screens/setup/06-service-preferences.jpg",
        description: "Hizmet seti işletme tipine ve cinsiyet kategorisine göre düzenlenir."
      },
      {
        tag: "S6",
        title: "Erkek hizmetleri",
        src: "./assets/screens/setup/06-services-men.jpg",
        description: "Erkek kuaförü hizmetleri süre, fiyat ve ikon bilgileriyle yönetilir."
      },
      {
        tag: "S6",
        title: "Kadın hizmetleri",
        src: "./assets/screens/setup/06-services-women.jpg",
        description: "Kadın kuaförü ve güzellik hizmetleri görsel katalog üzerinden seçilir."
      },
      {
        tag: "S7",
        title: "Arka plan seçimi 1",
        src: "./assets/screens/setup/07-background-1.jpg",
        description: "Salon vitrininin kullanıcı tarafında nasıl görüneceği tema seçimiyle belirlenir."
      },
      {
        tag: "S7",
        title: "Arka plan seçimi 2",
        src: "./assets/screens/setup/07-background-2.jpg",
        description: "Farklı işletme tipleri için farklı görsel arka plan alternatifleri sunulur."
      },
      {
        tag: "S7",
        title: "Arka plan seçimi 3",
        src: "./assets/screens/setup/07-background-3.jpg",
        description: "Tema seçimi işletme kartı, üst bar ve kullanıcı vitriniyle ilişkilidir."
      },
      {
        tag: "S7",
        title: "Arka plan seçimi 4",
        src: "./assets/screens/setup/07-background-4.jpg",
        description: "İşletme, müşteri ekranındaki görsel kimliğini kurulum sırasında seçer."
      },
      {
        tag: "S8",
        title: "İşletme önizleme",
        src: "./assets/screens/setup/08-preview.jpg",
        description: "Setup tamamlanmadan önce müşteri randevu akışı önizlenir."
      }
    ]
  },
  admin: {
    label: "Admin ekranları",
    screens: [
      {
        tag: "A1",
        title: "Günlük randevular",
        src: "./assets/screens/admin/01-day.jpg",
        description: "Admin günün randevularını, personel filtresini, boş zamanları ve tahmini ciroyu görür."
      },
      {
        tag: "A2",
        title: "Haftalık takvim",
        src: "./assets/screens/admin/02-week-calendar.jpg",
        description: "Hafta görünümünde personel bazlı randevular ve molalar tek çizelgede okunur."
      },
      {
        tag: "A3",
        title: "Gün yönetimi",
        src: "./assets/screens/admin/03-day-management.jpg",
        description: "Kapalı gün ve izin yönetimi takvim üzerinden seçilebilir."
      },
      {
        tag: "A4",
        title: "Haftalık muhasebe",
        src: "./assets/screens/admin/04-report-weekly.jpg",
        description: "Kazanç, randevu sayısı, yoğun günler ve personel performansı haftalık izlenir."
      },
      {
        tag: "A5",
        title: "Toplam rapor",
        src: "./assets/screens/admin/05-report-total.jpg",
        description: "Tüm zamanların kazanç ve randevu hacmi aylık kırılımla gösterilir."
      },
      {
        tag: "A6",
        title: "Müşteri yönetimi",
        src: "./assets/screens/admin/06-customers.jpg",
        description: "Müşteri geçmişi, yaklaşan randevu ve toplam harcama bilgileri listelenir."
      },
      {
        tag: "A7",
        title: "Engellenen müşteriler",
        src: "./assets/screens/admin/07-blocked-customers.jpg",
        description: "Sorunlu müşteriler ayrı sekmede izlenir ve engel durumu yönetilir."
      },
      {
        tag: "A8",
        title: "Yardım ekranı",
        src: "./assets/screens/admin/08-help.jpg",
        description: "Sık sorulan sorular ve e-posta destek kanalı yönetim tarafında hazırdır."
      },
      {
        tag: "A9",
        title: "Ayarlar",
        src: "./assets/screens/admin/09-settings.jpg",
        description: "Bildirim tercihleri, dil ve hesap çıkışı gibi temel kontroller tek ekrandadır."
      }
    ]
  }
};

const galleryGrid = document.querySelector("[data-gallery-grid]");
const tabButtons = document.querySelectorAll("[data-gallery-tab]");
const modal = document.querySelector("[data-screen-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalDescription = document.querySelector("[data-modal-description]");
const closeButton = document.querySelector("[data-modal-close]");
const prevButton = document.querySelector("[data-modal-prev]");
const nextButton = document.querySelector("[data-modal-next]");

let activeGallery = "user";
let activeIndex = 0;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderGallery() {
  const group = galleries[activeGallery];

  tabButtons.forEach((button) => {
    const isActive = button.dataset.galleryTab === activeGallery;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  galleryGrid.innerHTML = group.screens.map((screen, index) => `
    <button type="button" class="screen-card" data-screen-index="${index}" aria-label="${escapeHtml(screen.title)} ekranını aç">
      <span class="screen-frame">
        <img src="${screen.src}" alt="${escapeHtml(screen.title)} ekran görüntüsü" loading="lazy">
      </span>
      <span class="screen-copy">
        <span class="screen-tag">${escapeHtml(screen.tag)} · ${escapeHtml(group.label)}</span>
        <h3>${escapeHtml(screen.title)}</h3>
        <p>${escapeHtml(screen.description)}</p>
      </span>
    </button>
  `).join("");
}

function updateModal() {
  const group = galleries[activeGallery];
  const screen = group.screens[activeIndex];

  modalImage.src = screen.src;
  modalImage.alt = `${screen.title} ekran görüntüsü`;
  modalTitle.textContent = screen.title;
  modalKicker.textContent = `${screen.tag} · ${group.label}`;
  modalDescription.textContent = screen.description;
}

function openModal(index) {
  activeIndex = index;
  updateModal();

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeModal() {
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}

function moveModal(direction) {
  const total = galleries[activeGallery].screens.length;
  activeIndex = (activeIndex + direction + total) % total;
  updateModal();
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeGallery = button.dataset.galleryTab;
    activeIndex = 0;
    renderGallery();
  });
});

galleryGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-screen-index]");
  if (!card) return;

  openModal(Number(card.dataset.screenIndex));
});

closeButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", () => moveModal(-1));
nextButton.addEventListener("click", () => moveModal(1));

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (!modal.open) return;

  if (event.key === "ArrowLeft") {
    moveModal(-1);
  }

  if (event.key === "ArrowRight") {
    moveModal(1);
  }
});

renderGallery();
