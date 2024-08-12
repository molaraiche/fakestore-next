import axios from "axios";

export async function getAllProducts() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const results = await response.data;
  return results;
}

export async function getProductById(id: string) {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const results = await response.data;
  return results;
}
