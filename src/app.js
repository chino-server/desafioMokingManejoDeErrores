import express from "express";
import { generateMockProducts } from "./faker/mockProduct.js";
import { handleError } from "./middleware/handleError.js";
import Product from "./manager/product.manager.js";

const productInstance = new Product();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mockingproducts", (req, res) => {
  res.json(generateMockProducts());
});

app.get("/product/:id", async (req, res, next) => {
  try {
    const product = await productInstance.getAllProduct(req.params.id);
    res.json({ message: "Aquí tienes el producto", product });
  } catch (error) {
    next(error);
  }
});

app.get("/product", async (req, res, next)=>{
    try {
        const product = await productInstance.getAll()
        res.json ({product})
    } catch (error) {
        next (error)
    }
})

app.post("/product", async (req, res, next) => {
  try {
    const product = req.body;
    const newProduct = await productInstance.addProduct(product);
    res.json({ message: "producto creado", newProduct });
  } catch (error) {
    
    next(error);
  }
});

app.use(handleError);

app.listen(8080, () => {
  console.log("Escuchando el en puerto 8080");
});
