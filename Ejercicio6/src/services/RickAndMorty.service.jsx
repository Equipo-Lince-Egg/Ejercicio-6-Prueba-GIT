import { API_RM } from "../constants/Api";

export async function getAllCharactersById(id) {
  const response = await fetch(API_RM.CHARACTER_BY_ID(id));

  return response.json();
}

export async function getAllCharacters() {
  const response = await fetch(API_RM.CHARACTER_ALL());

  return response.json();
}
