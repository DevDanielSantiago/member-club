const history = document.getElementById("history");
const progressBarDoc = document.getElementById("progress-bar");
const fidelityCard = document.getElementById("fidelity-card");
const profile = document.getElementById("profile");

// Serão exibidas todas as sessões caso haja dados a serem exibidos
export async function showContent() {
  history.classList.remove("hide");
  progressBarDoc.classList.remove("hide");
  fidelityCard.classList.remove("hide");
  profile.classList.remove("hide");
}
