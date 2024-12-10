import { clientFetchById } from "../../services/client-fetch-by-id";
import { clientShow } from "../clients/show";
import { hideContent } from "./hide";

const form = document.querySelector("form");
const cardId = document.getElementById("card-id");

const history = document.getElementById("history");
const progressBar = document.getElementById("progress-bar");
const fidelityCard = document.getElementById("fidelity-card");
const profile = document.getElementById("profile");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    if (cardId.value.length < 15) {
      // Define um erro de validação para quantidade minima de caracteres
      // Um ID de cartão deve conter 12 número e 3 "-"
      cardId.setCustomValidity("ID do cartão inválido");
      // Exibe a mensagem de erro após sua definição
      return cardId.reportValidity();
    }

    const client = await clientFetchById({ id: cardId.value });
    clientShow({ client });
  } catch (error) {
    hideContent();
  }
};
