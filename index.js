// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) { 
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(lastDrivers) { 
    return lastDrivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) { 
    return function (value) { 
        return multiplyValue * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnDrivers) { 
    return returnDrivers(drivers)
}