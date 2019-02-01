const User =  require('./user/user');
const CONSTS = require('./config/app.const.js');



var u = new User();

u.loadCard(30);
u.takeTube(CONSTS.stations.HB,CONSTS.stations.EC);
u.takeBus();
u.takeTube(CONSTS.stations.EC,CONSTS.stations.HMS);

