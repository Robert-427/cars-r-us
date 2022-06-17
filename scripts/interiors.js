import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors()

export const interiorOptions = () => {
    let interiorHTML = `<h2>Interiors</h2>`
    interiorHTML += `<select id="interiors">`
    interiorHTML += `<option value="0">Prompt to select resource...</option>`
    for (const interior of interiors) {
        interiorHTML += `<option name="interior" value="${interior.id}">${interior.interior}</option>`
    }
    interiorHTML += "</select>"

    return interiorHTML
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            setInteriors(parseInt(changeEvent.target.value))
        }
    }
)
