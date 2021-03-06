import { Produto } from "../model/produto";
import { Categoria } from "../model/categoria";

export const CATEGORIA : Categoria[] = [
    {id : 1, nome : "Celular Samsung"},
    {id : 2, nome : "Celular Motorola"},
    {id : 3, nome : "Celular LG"}
]

export const PRODUTOS : Produto[] = [
    {id : 1, nome : "Celular LG K10", preco : 799.00, imagem : "k10.jpg", categoria_id : 3},
    {id : 2, nome : "Celular Motorola Moto X", preco : 1000.00, imagem : "motox.jpg", categoria_id : 2},
    {id : 3, nome : "Celular Samsung S9", preco : 3799.00, imagem : "s9.jpg", categoria_id : 1},
    {id : 4, nome : "Celular LG k4", preco : 499.00, imagem : "k4.jpg", categoria_id : 3},
    {id : 5, nome : "Celular Samsung J5", preco : 999.00, imagem : "j5.jpg", categoria_id : 1},
    {id : 6, nome : "Celular Motorla One", preco : 1499.00, imagem : "motoone.jpg", categoria_id : 2}
]