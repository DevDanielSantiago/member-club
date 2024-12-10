import { apiConfig } from "./api-config";

export async function clientFetchById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients/${id}`);
    if (response.status === 404) throw new Error("ID do cartão não encontrado");
    return response.json();
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("Não foi possível buscar o id do cartão");
    }
  }
}
