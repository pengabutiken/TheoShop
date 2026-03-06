import   {listProd, findProd} from "./services/productService"

function main() {
    const products = listProd();

    console.log("Alla produkter:");
    console.log(products);

      const product =findProd(2);
    console.log("Produkt med ID 2:");
    console.log(product);
}

main();