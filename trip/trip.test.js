const Trip = require('./trip.js');
const CONSTS = require('../config/app.const.js');


// test('max fare is calculated correctly', () => {
//     var obj = {
//         ANYWHERE_ZONE_1: 2.50,
//         ANY_ONE_ZONE_OUTSIDE_ZONE_1: 2.00,
//         ANY_TWO_ZONE_INCLUDING_ZONE_1: 3.00,
//         ANY_TWO_ZONE_EXCLUDING_ZONE_1: 2.25,
//         ANY_THREE_ZONES: 3.20,
//         ANY_BUS_JOURNEY: 1.8,
//     }
//     var max = 3.20;
//     var T = new Trip();
//     var calculatedMax = T.calculateMaxFare(obj);
//     expect(calculatedMax).toBe(max);
// });

test("number of zones traveled is correct, when source is in one Zone", ()=>{
    var source = CONSTS.stations.HB;
    var destination = CONSTS.stations.WLB
    var t  = new Trip();
    var zoneTraveled = t.getAllTravaledZones(source.zones,destination.zones);
    expect(zoneTraveled.length).toBe(3);
})

test("number of zones traveled is correct, when destination is in more than one Zone", ()=>{
    var source = CONSTS.stations.HB;
    var destination = CONSTS.stations.KHI;
    var t  = new Trip();
    var zoneTraveled = t.getAllTravaledZones(source.zones,destination.zones);
    expect(zoneTraveled.length).toBe(2);
})

test("number of zones traveled is correct, when traveling within zone 1", ()=>{
    var source = CONSTS.stations.HB;
    var destination = CONSTS.stations.EC;
    var t  = new Trip();
    var zoneTraveled = t.getAllTravaledZones(source.zones,destination.zones);
    expect(zoneTraveled.length).toBe(1);
})