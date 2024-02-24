// Code your solution here


function findMatching(drivers, name){
    let driverName = drivers.filter((element) => {
        return name.toUpperCase() == element.toUpperCase() 
    })
    return driverName
}

function fuzzyMatch(drivers, letter){
    let driverName = drivers.filter((element) => {
        return element.startsWith(letter)
    })
    return driverName
}

function matchName(drivers, nameStr){
    let driverName = drivers.filter((element) => {
        return element.name == nameStr
    })
    return driverName
}
