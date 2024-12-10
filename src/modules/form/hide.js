const history = document.getElementById("history");
const progressBarDoc = document.getElementById("progress-bar");
const fidelityCard = document.getElementById("fidelity-card");
const profile = document.getElementById("profile");

// Serão encondidas todas as sessões caso não haja dados a serem exibidos
export async function hideContent() {
  history.classList.add("hide");
  progressBarDoc.classList.add("hide");
  fidelityCard.classList.add("hide");
  profile.classList.add("hide");
}
