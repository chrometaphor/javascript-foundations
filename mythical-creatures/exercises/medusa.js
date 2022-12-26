var Person = require('./person');
var Statue = require('./statue');


class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = []
    }
    gazeAtVictim(person) {

        // add a bit of logic
        //so this.statues.length is no more than 3
// when a victim stares at medusa they 
// turn into a statue
// need to push in a statue instance 
// instead of a person instance

    var newStatue = new Statue(person.name)
    if (this.statues.length < 3) {
    this.statues.push(newStatue)
    } else if (this.statues.length >= 3) {
        this.statues.shift();
    }

    //remove the first item in an array
    //with .shift
    // in what situation do we want to 
    //remove the first item?
    //if this.statues.length is greater than 3
    }
}

module.exports = Medusa;