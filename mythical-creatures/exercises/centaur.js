class Centaur {
    constructor (name) {
        this.name = name
        this.breed = 'Palomino'
        this.cranky = false
        this.standing = true
        this.activities = 0

    }
    shootBow() {
        this.activities ++
        
        if(this.activities === 3) {
            this.cranky = true
            }
        return 'Twang!!!'
       
    // } else {

    //     if(this.activities = 3) {
    //     this.cranky = true
    //     }
    // }
    //     return 'NO!'

           
 

    run() {
        this.activities ++
        if(this.activities === 3) {
            this.cranky = true
            }

        return 'Clop clop clop clop!!!'
    }
    
}
    module.exports = Centaur