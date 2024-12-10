const cardId = document.getElementById("card-id");

cardId.oninput = (e) => {
  // fomata o id do cartão para o padrão 123-456-789-101
  const value = e.target.value.replace(/[^\d,]/g, "");
  const parts = value.match(/.{1,3}/g) || [];

  const newValue = parts.join("-");
  e.target.value = newValue;

  // remove erro customizado de validação caso exista
  cardId.setCustomValidity("");
};
