class Magician {
    constructor (magicianObjectDetails) {
    this.name = `The Great ${magicianObjectDetails.name}`
    this.assistant = magicianObjectDetails.assistant
    // console.log(magicianObjectDetails.clothing)
    this.favoriteAccessory = magicianObjectDetails.clothing || 'top hat'
    this.confidencePercentage = 10
    }
    performIncantation(magicSpell) {
        return magicSpell.toUpperCase() + '!'

    }
    performTrick() {
        this.confidencePercentage += 10;

        if (this.favoriteAccessory === 'cape') {
        return  'PULL DOVE FROM SLEEVE'
    }
    


    return 'PULL RABBIT FROM TOP HAT'
}
    performShowStopper() {
        if (this.confidencePercentage >= 100 && this.assistant) {
        return 'WOW! The magician totally just sawed that person in half!'
        }
        

        return 'Oh no, this trick is not ready!'
    }
}
module.exports = Magician