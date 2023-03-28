// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0,2)
}
const returnLastTwoDrivers = function (arrayOfDrivers){
    return arrayOfDrivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 
function createFareMultiplier (multiplier){
    return function (fare){
    return multiplier * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (arrayOfDrivers, differentDrivers){
    return differentDrivers(arrayOfDrivers)
}