function produceDrivingRange(blockRange) {
    return function(blk1, blk2) {
        let delta = Math.abs(
            parseInt(blk1.substring(0, blk1.length - 2)) - parseInt(blk2.substring(0, blk2.length - 2))
            );

        if (delta <= blockRange) {
            return `within range by ${blockRange - delta}`
        } else {
            return `${delta - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage) {
    return function(subtotal) {
        return subtotal * percentage
    }
}

function createDriver() {
    let DriverId = 0;
    
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}