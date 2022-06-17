import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const wheelOptions = () => {
    let wheelHTML = `<h2>Wheels</h2>`
    wheelHTML += `<select id="wheels">`
    wheelHTML += `<option value="0">Prompt to select resource...</option>`
    for (const wheel of wheels) {
        wheelHTML += `<option name="wheel" value="${wheel.id}">${wheel.wheel}</option>`
    }
    wheelHTML += "</select>"

    return wheelHTML
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)