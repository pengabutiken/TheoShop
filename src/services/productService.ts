import { getAllProducts, getProdbyID } from "../repos/productRepo";

export function listProd(){
    return getAllProducts();
}

export function findProd(id:number){
    const product=getProdbyID(id);
    if(!product){
        console.log("Produkt finnes ej");
    }
    return product;
}