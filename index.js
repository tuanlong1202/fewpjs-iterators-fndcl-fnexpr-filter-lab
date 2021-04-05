// Code your solution here

function findMatching(arrDrivers = [], strName) {
    return arrDrivers.filter(function(el) {
        return el.toLowerCase().indexOf(strName.toLowerCase()) !== -1;
    });
}

function fuzzyMatch(arrDrivers = [], strChar) {
    return arrDrivers.filter(function(el) {
        return el.toLowerCase().indexOf(strChar.toLowerCase()) == 0;
    });
}

function matchName(arrDrivers, driverName) {
    var arrResult = [];
    arrResult = arrDrivers.filter(function(el) {
        return el.name.toLowerCase().indexOf(driverName.toLowerCase()) !== -1;
    })
    return arrResult;
}