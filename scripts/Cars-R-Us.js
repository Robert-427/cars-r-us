import { colorOptions } from "./colors.js";
import { interiorOptions } from "./interiors.js";
import { wheelOptions } from "./wheels.js";
import { technologyOptions } from "./technologies.js";
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("orderButton")) {
        addCustomOrder()
    }
}
)

export const carsRus = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices_wheels options">
                ${colorOptions()}
            </section>
            <section class="choices_wheels options">
                ${interiorOptions()}
            </section>
            <section class="choices_wheels options">
                ${wheelOptions()}
            </section>
            <section class="choices_wheels options">
                ${technologyOptions()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custome Car Order</h2>
            ${Orders()}
        </article>
        `
}
