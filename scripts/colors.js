import { getColors, setColors } from "./database.js";

const colors = getColors()

export const colorOptions = () => {
    let colorHTML = `<h2>Colors</h2>`
    colorHTML += `<select id="colors">`
    colorHTML += `<option value="0">Prompt to select resource...</option>`
    for (const color of colors) {
        colorHTML += `<option name="color" value="${color.id}">${color.color}</option>`
    }
    colorHTML += "</select>"

    return colorHTML
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "colors") {
            setColors(parseInt(changeEvent.target.value))
        }
    }
)
