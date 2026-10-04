// Midland Cyber - editable service charges
// Update the values below whenever your prices change.
const CYBER_CHARGES = {
  photocopyBW: { name: "Black & White Photocopy", unit: "page", price: 5 },
  photocopyColour: { name: "Colour Photocopy", unit: "page", price: 20 },
  printingBW: { name: "Black & White Printing", unit: "page", price: 10 },
  printingColour: { name: "Colour Printing", unit: "page", price: 30 },
  scanning: { name: "Scanning", unit: "document", price: 20 },
  binding: { name: "Tape / Spiral Binding", unit: "book", price: 100 },
  typing: { name: "Typing / Document Preparation", unit: "page", price: 30 },
  lamination: { name: "Lamination", unit: "document", price: 50 },
  helb: { name: "HELB Application Assistance", unit: "application", price: 100 },
  kra: { name: "KRA Services", unit: "service", price: 100 },
  goodConduct: { name: "Good Conduct Application Assistance", unit: "application", price: 150 }
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