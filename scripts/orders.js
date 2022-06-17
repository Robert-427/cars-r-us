import { getColors, getInteriors, getTechnologies, getWheels, getOrders } from "./database.js";

const buildOrderListItem = (order) => {
    const colors = getColors()
    const interiors = getInteriors()
    const technologies = getTechnologies()
    const wheels = getWheels()

    const foundColors = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnologies = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const totalCost = foundColors.price + foundInteriors.price + foundTechnologies.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
