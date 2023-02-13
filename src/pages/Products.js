import header from "@/components/header"
import { products } from "@/data"

const ProductPage = `
    ${header()}
    <h1>ProductPage</h1>
    ${products.map((product) => {
    return `  <div class="container">
                    <div class="row">
                        <div class="col">
                            <h3>${product.name}</h3>
                            <span>${product.price}</span>
                        </div>
                    </div>
                </div>`
}).join("")}`

export default ProductPage