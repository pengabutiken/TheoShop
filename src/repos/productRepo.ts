import {Product} from "../models/Product";

export const products: Product[]=[
    {id:1, name:"Öl", price:69, stock: 120},
    {id: 2, name:"Cola-Zero", price:25, stock:100},
    {id: 3, name:"Fanta-Zero", price:25, stock:200},
];
export function getAllProducts(): Product[]{
    return products;
}