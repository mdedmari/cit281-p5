class Monster {
    constructor({monsterName = 'Unknown',minimumLife = '0',currentLife = '100'}) {
        this.monsterName = monsterName,
        this.minimumLife = minimumLife,
        this.currentLife = currentLife
        this.isAlive = (currentLife >= minimumLife) ? "True" : "False" ;
    }

updateLife(lifeChangeAmount) {
    let minimumLife = this.currentLife = (this.currentLife - lifeChangeAmount) < 0 ? 0: this.currentLife - lifeChangeAmount
    let currentLife = this.isAlive = this.currentLife < this.minimumLife ? true : false;
}

randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
if (maximumLifeDrain > minimumLifeDrain) {
let lifeChangeAmount = getRandomInteger(minimumLifeDrain, maximumLifeDrain);
updateLife(lifeChangeAmount);
}
}
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
