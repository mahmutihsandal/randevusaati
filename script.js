const billingButtons = document.querySelectorAll("[data-billing]");
const priceValues = document.querySelectorAll("[data-price]");
const periodLabels = document.querySelectorAll("[data-period]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const screenCards = document.querySelectorAll("[data-modal-image]");
const screenModal = document.querySelector(".screen-modal");
const screenModalImage = document.querySelector("#screen-modal-image");
const screenModalTitle = document.querySelector("#screen-modal-title");
const screenModalCopy = document.querySelector("#screen-modal-copy");
const modalClose = document.querySelector(".modal-close");
const whatsappLink = document.querySelector("[data-whatsapp-link]");

function setBilling(period) {
  billingButtons.forEach((button) => {
    const isActive = button.dataset.billing === period;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  priceValues.forEach((price) => {
    price.textContent = price.dataset[period];
  });

  periodLabels.forEach((label) => {
    label.textContent = period === "monthly" ? "/ay" : "/yıl";
  });
}

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setBilling(button.dataset.billing);
  });
});

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Menüyü aç" : "Menüyü kapat");
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menüyü aç");
      navLinks.classList.remove("is-open");
    });
  });
}

function openScreenModal(card) {
  if (!screenModal || !screenModalImage || !screenModalTitle || !screenModalCopy) return;

  screenModalImage.src = card.dataset.modalImage;
  screenModalImage.alt = card.dataset.modalTitle || "";
  screenModalTitle.textContent = card.dataset.modalTitle || "";
  screenModalCopy.textContent = card.dataset.modalCopy || "";

  if (typeof screenModal.showModal === "function") {
    screenModal.showModal();
  } else {
    screenModal.setAttribute("open", "");
  }
}

function closeScreenModal() {
  if (!screenModal) return;

  if (typeof screenModal.close === "function") {
    screenModal.close();
  } else {
    screenModal.removeAttribute("open");
  }
}

screenCards.forEach((card) => {
  card.addEventListener("click", () => {
    openScreenModal(card);
  });
});

modalClose?.addEventListener("click", closeScreenModal);

screenModal?.addEventListener("click", (event) => {
  if (event.target === screenModal) {
    closeScreenModal();
  }
});

function setupWhatsAppLink() {
  if (!whatsappLink) return;

  const phone = (whatsappLink.dataset.phone || "").replace(/\D/g, "");
  const message = whatsappLink.dataset.message || "Merhaba, Randevu Saati için bilgi almak istiyorum.";

  if (!phone) {
    whatsappLink.setAttribute("aria-disabled", "true");
    whatsappLink.setAttribute("title", "WhatsApp numarası eklenecek.");
    return;
  }

  whatsappLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener";
  whatsappLink.removeAttribute("aria-disabled");
  whatsappLink.setAttribute("title", "WhatsApp ile demo talebi gönder");
}

setupWhatsAppLink();

whatsappLink?.addEventListener("click", (event) => {
  if (whatsappLink.getAttribute("aria-disabled") === "true") {
    event.preventDefault();
  }
});
