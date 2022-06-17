const database = {
    colors: [
        {id: 1, color: 'Silver', price: 200},
        {id: 2, color: 'Midnight Blue', price: 400},
        {id: 3, color: 'Firebrick Red', price: 600},
        {id: 4, color: 'Spring Green', price: 800}        
    ],
    interiors: [
        {id: 1, interior: `Beige Fabric`, price: 200},
        {id: 2, interior: `Charcoal Fabric`, price: 400},
        {id: 3, interior: `White Leather`, price: 600},
        {id: 4, interior: `Black Leather`, price: 800}
    ],
    technologies: [
        {id: 1, technology: `Basic Package`, includes: `(basic sound system)`, price: 200},
        {id: 2, technology: `Navigation Package`, includes: `(includes integrated navigation controls)`, price: 400},
        {id: 3, technology: `Visibility Package`, includes: `(includes side and reat cameras)`, price: 600},
        {id: 4, technology: `Ultra Package`, includes: `(includes navigation and visibility packages)`, price: 800}
    ],
    wheels: [
        {id: 1, wheel: `17-inch Pair Radial`, price: 200},
        {id: 2, wheel: `17-inch Pair Radial Black`, price: 400},
        {id: 3, wheel: `18-inch Pair Spoke Silver`, price: 600},
        {id: 4, wheel: `18-inch Pair Spoke Black`, price: 800}
    ]
}

export const getColors = () => {
    return database.colors.map(color => ({ ...color }))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}