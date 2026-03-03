import { getAllProducts } from "./repos/productRepo";

function main() {
    const products = getAllProducts();

    console.log("Alla produkter:");
    console.log(products);
}

main();