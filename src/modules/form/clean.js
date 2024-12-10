const clientName = document.getElementById("client-name");
const clientSince = document.getElementById("client-since");

const cardIdNumber = document.getElementById("card-id-number");
const historyList = document.getElementById("history-list");
const historyListCounter = document.getElementById("counter");

const markersList = document.getElementById("markers");
const progress = document.getElementById("progress");
const progressQuantity = document.getElementById("progress-quantity");

// Todo o conteúdo existente será removido antes que seja inseridos novos dados
export async function cleanContent() {
  clientName.textContent = "";
  clientSince.textContent = "";
  cardIdNumber.textContent = "";
  historyListCounter.textContent = "";
  historyList.textContent = "";
  markersList.textContent = "";
  progressQuantity.textContent = "";
  progress.textContent = "";
}
