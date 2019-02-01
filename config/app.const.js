const CONSTS = {
    stations: {
        HB: {
            name : 'Holborn',
            zones : [1]
        },
        EC: {
            name : "Earl's Court",
            zones : [1,2]
        },
        WLB: {
            name : 'Wimbledon',
            zones : [3]
        },
        HMS: {
            name: 'Hammersmith',
            zones : [2]
        },
        KHI: {
            name: 'Karachi',
            zones : [2,3]
        },
    },
    fares : {
        ANYWHERE_ZONE_1 : 2.50,
        ANY_ONE_ZONE_OUTSIDE_ZONE_1 : 2.00,
        ANY_TWO_ZONE_INCLUDING_ZONE_1 : 3.00,
        ANY_TWO_ZONE_EXCLUDING_ZONE_1 : 2.25,
        ANY_THREE_ZONES : 3.20,
        ANY_BUS_JOURNEY : 1.8,
    }

}

module.exports = CONSTS;