import { cleanContent } from "../form/clean";
import { showContent } from "../form/show";

const clientName = document.getElementById("client-name");
const clientSince = document.getElementById("client-since");

const cardIdNumber = document.getElementById("card-id-number");
const historyList = document.getElementById("history-list");
const historyListCounter = document.getElementById("counter");

const markersList = document.getElementById("markers");
const progress = document.getElementById("progress");
const progressQuantity = document.getElementById("progress-quantity");

export function clientShow({ client }) {
  showContent();
  cleanContent();

  clientName.textContent = client.name;
  clientSince.textContent = `Cliente desde ${client.clientSince}`;

  cardIdNumber.textContent = `ID: ${client.id}`;

  historyListCounter.textContent = `${client.appointmentHistory.length} cortes`;

  client.appointmentHistory.forEach((appointment, index) => {
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("history__info");

    const firstPart = document.createElement("div");
    const firstStrong = document.createElement("strong");
    firstStrong.classList.add("history__date");
    firstStrong.textContent = appointment.date;

    const firstSpan = document.createElement("span");
    firstSpan.classList.add("history__time");
    firstSpan.textContent = appointment.time;

    firstPart.append(firstStrong, firstSpan);

    const secondPart = document.createElement("div");
    secondPart.classList.add("history__check");

    const secondImage = document.createElement("img");
    secondImage.src = "./src/assets/check-history.png";

    secondPart.append(secondImage);

    cardInfo.append(firstPart, secondPart);

    historyList.append(cardInfo);
  });

  for (let i = 0; i < 10; i++) {
    const markerBox = document.createElement("div");
    markerBox.classList.add("marker_box");
    if (client.appointmentHistory[i]) markerBox.classList.add("checked");

    markersList.append(markerBox);
  }

  progressQuantity.innerHTML = `
    <strong class="progress__quantity-strong">
      ${10 - client.appointmentHistory.length} 
    </strong> cortes restantes
  `;

  const progressOf = document.createElement("div");
  progressOf.classList.add("progress__values");
  progressOf.textContent = `${client.appointmentHistory.length} de 10`;

  const progressBar = document.createElement("div");
  progressBar.classList.add("bar");
  progressBar.style.cssText = `--percentage: ${
    client.appointmentHistory.length * 10
  }%; --time: ${0.7 + client.appointmentHistory.length * 0.1}s`;

  progress.append(progressBar, progressOf);
}
