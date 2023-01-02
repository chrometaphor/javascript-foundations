class Centaur {
    constructor (name) {
        this.name = name
        this.breed = 'Palomino'
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.activities = 0

    }
    shootBow() {
        if(this.cranky || this.layingDown) {
            return 'NO!'
        }

        this.activities ++
        
        if(this.activities === 3) {
            this.cranky = true
                }
                return 'Twang!!!'
        }         
 
    run() {
        if(this.cranky || this.layingDown) {
                return 'NO!'
        }
            this.activities ++
            if(this.activities === 3) {
            this.cranky = true
                }
                return 'Clop clop clop clop!!!'
    }
    sleep() {
        if(this.standing) {
                return 'NO!'
        } else {
            this.cranky = false
            return 'ZZZZ'
        }
    }
    layDown() {
            this.standing = false
            this.layingDown = true
            }
    standUp() {
            this.standing = true
            this.layingDown = false
    }
    drinkPotion() {
            this.cranky = false
        if(this.standing === false) {
            return 'Not while I\'m laying down!'
        }
              
    }


    }

  

    module.exports = Centaur