const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  // más productos...
];

export default class Product {
  async getAllProduct(id) {
    const product = products.find((product) => product.id === parseInt(id));
    if (!product) {
      throw new Error("PRODUCT_NOT_FOUND");
    }
    return product;
  }

  async addProduct(obj) {
    
    const product = products.find((product) => product.id === parseInt(obj.id));
    if (product) {
      throw new Error("PRODUCT_ALREADY_EXISTS");
    }
    const newProduct = products.push(obj);
    return newProduct;
  }


  async getAll (){
    const product = products.map(product=>product)
    console.log(product);
    if (product.length <0){
        throw new Error ("NOT_PRODUCT")
    }
    return product
  }
}
