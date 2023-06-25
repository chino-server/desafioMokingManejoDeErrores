import { faker } from "@faker-js/faker";

const generateProduct = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
  };
};

export function generateMockProducts() {
  let products = [];
  for (let i = 0; i < 100; i++) {
    products.push(generateProduct())
  }
  return products
}

