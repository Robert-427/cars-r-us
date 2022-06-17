import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

export const technologyOptions = () => {
    let technologyHTML = `<h2>Technologies</h2>`
    technologyHTML += `<select id="technologies">`
    technologyHTML += `<option value="0">Prompt to select resource...</option>`
    for (const technology of technologies) {
        technologyHTML += `<option name="technology" value="${technology.id}">${technology.technology}</option>`
    }
    technologyHTML += "</select>"

    return technologyHTML
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)
