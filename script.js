const billingButtons = document.querySelectorAll("[data-billing]");
const priceValues = document.querySelectorAll("[data-price]");
const periodLabels = document.querySelectorAll("[data-period]");
const faqButtons = document.querySelectorAll(".faq-item button");

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

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
    });

    button.setAttribute("aria-expanded", String(!isExpanded));
  });
});
