const database = {
    colors: [
        { id: 1, color: 'Silver', price: 200 },
        { id: 2, color: 'Midnight Blue', price: 400 },
        { id: 3, color: 'Firebrick Red', price: 600 },
        { id: 4, color: 'Spring Green', price: 800 }
    ],
    interiors: [
        { id: 1, interior: `Beige Fabric`, price: 200 },
        { id: 2, interior: `Charcoal Fabric`, price: 400 },
        { id: 3, interior: `White Leather`, price: 600 },
        { id: 4, interior: `Black Leather`, price: 800 }
    ],
    technologies: [
        { id: 1, technology: `Basic Package`, includes: `basic sound system`, price: 200 },
        { id: 2, technology: `Navigation Package`, includes: `integrated navigation controls`, price: 400 },
        { id: 3, technology: `Visibility Package`, includes: `side and reat cameras`, price: 600 },
        { id: 4, technology: `Ultra Package`, includes: `navigation and visibility packages`, price: 800 }
    ],
    wheels: [
        { id: 1, wheel: `17-inch Pair Radial`, price: 200 },
        { id: 2, wheel: `17-inch Pair Radial Black`, price: 400 },
        { id: 3, wheel: `18-inch Pair Spoke Silver`, price: 600 },
        { id: 4, wheel: `18-inch Pair Spoke Black`, price: 800 }
    ],
    customOrders: [
        { id: 1, colorId: 3, interiorId: 2, techId: 3, wheelId: 4, timestamp: 1614659931693 }
    ],
    orderBuilder: {}
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
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}
export const setColors = (id) => {
    database.orderBuilder.colorId = id
}
export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}