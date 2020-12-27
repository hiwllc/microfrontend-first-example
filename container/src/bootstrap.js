import { mount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("Container!");

mount(document.querySelector("#products-container"));
mountCart(document.querySelector("#cart-container"));
