// Midland Cyber - current service charges
// Prices supplied for the Midland Cyber website.
const CYBER_CHARGES = {
  photocopyPrinting: { name: "Photocopying / Printing", unit: "page", price: 10 },
  scanning: { name: "Scanning", unit: "page", price: 20 },
  typing: { name: "Typing", unit: "page", price: 30 },
  lamination: { name: "Lamination", unit: "each", price: 50 },
  helb: { name: "HELB Application", unit: "application", price: 700 },
  kraApplication: { name: "KRA Application", unit: "application", price: 250 },
  kraReturns: { name: "KRA Returns", unit: "service", minPrice: 150, maxPrice: 300, priceLabel: "KSh 150–300" },
  goodConduct: { name: "Good Conduct", unit: "application", price: 250 }
};

function formatKES(amount) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(amount);
}

function getCyberCharge(key) {
  return CYBER_CHARGES[key] || null;
}

if (typeof window !== "undefined") {
  window.MIDLAND_CYBER_CHARGES = CYBER_CHARGES;
  window.getCyberCharge = getCyberCharge;
  window.formatCyberKES = formatKES;
}