// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0,2)
const returnLastTwoDrivers = (arr) => arr.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (int) => {
    return function(fare) {
        return int*fare
    }
}
const fareDoubler = (fare) => createFareMultiplier(2)(fare)
const fareTripler = (fare) => createFareMultiplier(3)(fare)
const selectDifferentDrivers = (drivers,fn) => fn(drivers)
