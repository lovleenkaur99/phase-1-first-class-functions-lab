// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers = function (drivers) { 
    let startingLocation = 3; 
    let endingLocation = drivers.length;
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) { 
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplValue) { 
    return function (value) { 
        return multiplValue * value;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) { 
    return driversToReturn(drivers);
}