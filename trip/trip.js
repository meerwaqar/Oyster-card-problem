const CONSTS = require('../config/app.const.js');

class Trip {
    constructor(card) {
        this.card = card;
        this.currentFare = 0;
        this.swipedCard = false;
        this.maxFare = this.calculateMaxFare(CONSTS.fares);
        this.source = null;
        this.destination = null;
    }

    /**
     * This method return the max fare
     * @param {object of all fares} obj 
     */
    calculateMaxFare(obj) {
        var max = Object.keys(obj).reduce(
            function (accumulator, k) {
                return obj[k] > accumulator
                    ?
                    obj[k]
                    :
                    accumulator
            }, -Infinity);
        return max
    }

    /**
     * This method sets the source station of the trip
     * @param {source station} s 
     */
    setSource(s) {
        this.source = s;
    }

    /**
     * this method sets the destination of the trip
     * @param {destination of the trip} d 
     */
    setDestination(d) {
        this.destination = d;
    }

    /**
     * this method charges a user fare of a bus ride
     */
    busTrip() {
        console.log("In a bus Trip, Bon Voyage!");
        this.card.debit(CONSTS.fares.ANY_BUS_JOURNEY);
    }
    /**
     * this method sets current fare
     * @param {*} amount 
     */
    setCurrentFare(amount) {
        this.currentFare = amount;
    }

    /**
     * This method sets source of the trip and sets current fare to max fare.
     * @param {stateion} station 
     */
    enterStation(station) {
        this.setSource(station);
        this.setCurrentFare(this.maxFare);
        console.log("User passed through the barrier in station : ", station.name);
    }

    /**
     * This method sets destination of the trip, and calculates actual fare, 
     * and checks if user has swiped card, it charges user the actual fare, 
     * otherwise charges user max fare.
     * @param {station} station 
     */
    exitStation(station) {
        this.setDestination(station);
        var tripFare = this.calculateFare();
        console.log("User passed out of the barrier in station : ", station.name);
        if (this.swipedCard)
            this.setCurrentFare(tripFare);

        this.chargerUserFare(this.currentFare);
        this.resetSwipCard();
    }


    /**
     * This method charges user card an amount
     * @param {amout} amount 
     */
    chargerUserFare(amount) {
        this.card.debit(amount);
    }

    userSwipedCard() {
        this.swipedCard = true;
        console.log("User swiped Card");
    }
    resetSwipCard() {
        this.swipedCard = false;
    }


    /**
     * This method calculates actual fare, depending on which zones are travaled.
     */
    calculateFare() {
        // return 10;
        var s = this.source;
        var d = this.destination;

        if (s === '' || d === '') {
            console.log("unable to calculate fare");
            return
        }
        var totalZonesTraveled = this.getAllTravaledZones(s.zones, d.zones);
        var finalFare = this.getTotalFare(totalZonesTraveled);
        return finalFare;
    }


    /**
     * This method fetched zones of source and destination stations, 
     * This method also favours user, if a station is in two zones. minimum fare is charged
     * @param {source} s 
     * @param {destination} d 
     */
    getAllTravaledZones(s, d) {
        var traveledZones = [];

        var minDestinationZone = Math.min(...d);
        if (s.length > 1) {
            //more than one zone in source
            var maxDestinationZone = Math.max(s);
            var firstZone = [];
            var secondZone = [];
            for (let i = maxDestinationZone; i <= minDestinationZone; i++) {
                firstZone.push(i);
            }
            traveledZones = firstZone.length < secondZone.length ? firstZone : secondZone;
        }

        else {
            for (let i = s[0]; i <= minDestinationZone; i++) {
                traveledZones.push(i)
            }
        }

        return traveledZones;

    }


    /**
     * This method defined charging rules of the journey
     * @param {zones} zones 
     */
    getTotalFare(zones) {
        switch (zones.length) {
            case 1:
                if (zones[0] === 1)
                    return CONSTS.fares.ANYWHERE_ZONE_1;
                else
                    return CONSTS.fares.ANY_ONE_ZONE_OUTSIDE_ZONE_1;


            case 2:
                if (zones.indexOf(1) === -1)
                    return CONSTS.fares.ANY_TWO_ZONE_EXCLUDING_ZONE_1;
                else
                    return CONSTS.fares.ANY_TWO_ZONE_INCLUDING_ZONE_1


            case 3:
                return CONSTS.fares.ANY_THREE_ZONES
            default:
                return null
        }
    }
}

module.exports = Trip;