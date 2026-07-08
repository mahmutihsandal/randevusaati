const billingButtons = document.querySelectorAll("[data-billing]");
const priceValues = document.querySelectorAll("[data-price]");
const periodLabels = document.querySelectorAll("[data-period]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const screenModal = document.querySelector(".screen-modal");
const screenModalImage = document.querySelector("#screen-modal-image");
const screenModalTitle = document.querySelector("#screen-modal-title");
const screenModalCopy = document.querySelector("#screen-modal-copy");
const modalClose = document.querySelector(".modal-close");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const pricingCtaOverlay = document.querySelector(".pricing-cta-overlay");
const heroSection = document.querySelector("#top");

function setBilling(period) {
  billingButtons.forEach((button) => {
    const isActive = button.dataset.billing === period;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
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

  screenModal.hidden = false;
  document.body.classList.add("is-modal-open");
  modalClose?.focus();
}

function closeScreenModal() {
  if (!screenModal) return;

  screenModal.hidden = true;
  document.body.classList.remove("is-modal-open");
}

document.addEventListener("click", (event) => {
  const card = event.target.closest?.("[data-modal-image]");
  if (!card) return;

  openScreenModal(card);
});

modalClose?.addEventListener("click", closeScreenModal);

screenModal?.addEventListener("click", (event) => {
  if (event.target === screenModal) {
    closeScreenModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && screenModal && !screenModal.hidden) {
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

function setupFloatingPricingCta() {
  if (!pricingCtaOverlay) return;

  let isVisible = false;
  let isTicking = false;

  function setVisible(nextVisible) {
    if (nextVisible === isVisible) return;

    isVisible = nextVisible;
    pricingCtaOverlay.classList.toggle("is-visible", isVisible);
    pricingCtaOverlay.setAttribute("aria-hidden", String(!isVisible));
    pricingCtaOverlay.toggleAttribute("inert", !isVisible);
  }

  function updateVisibility() {
    const triggerY = heroSection
      ? heroSection.offsetTop + heroSection.offsetHeight - 120
      : window.innerHeight * 0.85;

    setVisible(window.scrollY >= triggerY);
  }

  function requestVisibilityUpdate() {
    if (isTicking) return;

    isTicking = true;
    window.requestAnimationFrame(() => {
      updateVisibility();
      isTicking = false;
    });
  }

  updateVisibility();
  window.addEventListener("scroll", requestVisibilityUpdate, { passive: true });
  window.addEventListener("resize", requestVisibilityUpdate);
}

setupFloatingPricingCta();

/* ───────────────────────────────────────────────
   Scroll-triggered section reveals
   ─────────────────────────────────────────────── */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

/* ───────────────────────────────────────────────
   Header scroll effect
   ─────────────────────────────────────────────── */

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const scrollThreshold = 10;

  window.addEventListener(
    "scroll",
    () => {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > scrollThreshold);
    },
    { passive: true }
  );
}

/* ───────────────────────────────────────────────
   Active nav link on scroll
   ─────────────────────────────────────────────── */

const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionIds = Array.from(navAnchors).map((a) => a.getAttribute("href").slice(1));
const trackedSections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

if (trackedSections.length > 0 && "IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
          link.classList.toggle("is-active", entry.isIntersecting);
        }
      });
    },
    { threshold: 0.15, rootMargin: "-20% 0px -60% 0px" }
  );

  trackedSections.forEach((section) => navObserver.observe(section));
}

/* ───────────────────────────────────────────────
   FAQ smooth accordion
   ─────────────────────────────────────────────── */

const faqDetails = document.querySelectorAll(".faq-list details");

faqDetails.forEach((detail) => {
  const summary = detail.querySelector("summary");
  const content = detail.querySelector("p");

  if (!summary || !content) return;

  summary.addEventListener("click", (e) => {
    e.preventDefault();

    if (detail.open) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";

      requestAnimationFrame(() => {
        content.style.maxHeight = "0";
        content.style.paddingBottom = "0";
        content.style.opacity = "0";
      });

      const onEnd = () => {
        detail.open = false;
        content.style.maxHeight = "";
        content.style.paddingBottom = "";
        content.style.opacity = "";
      };

      content.addEventListener("transitionend", onEnd, { once: true });
    } else {
      detail.open = true;

      const height = content.scrollHeight;
      content.style.maxHeight = "0";
      content.style.paddingBottom = "0";
      content.style.opacity = "0";
      content.style.overflow = "hidden";

      requestAnimationFrame(() => {
        content.style.maxHeight = height + "px";
        content.style.paddingBottom = "";
        content.style.opacity = "1";
      });

      const onEnd = () => {
        content.style.maxHeight = "";
        content.style.overflow = "";
      };

      content.addEventListener("transitionend", onEnd, { once: true });
    }
  });
});
