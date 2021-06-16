// Soldier
class Soldier {
    constructor(health, strength) {
      // THIS inside a constructor method is referring to the object it's creating
      this.health = health
      this.strength = strength
    }

    // don't use the function keyword when adding methods inside class
    attack = () => {
      console.log('ATTACK')
      return this.strength
    }

    receiveDamage = (damage) => {
      this.health -= damage
  }
}

let greenSoldier = new Soldier(100, 100);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage = (damage) => {
    this.health -= damage

    
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry = () => {
    return `Odin Owns You All!`
  }

}

let viking1 = new Viking ('Tom', 100, 100);

// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health -= damage

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
  this.vikingArmy = []
  this.saxonArmy = []
}
 
  
  addViking = (Viking) => {
    this.vikingArmy.push(Viking)
  }

  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack = () => {
  this.saxonArmy[Math.floor(Math.random()*saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random()*vikingArmy.length)].strength);

   if (this.health > 0) {
    return
    } {
    // this.saxonArmy.splice(saxon)
    return `A Saxon has died in combat`
    }

  }

  saxonAttack = () => {}

  showStatus() {}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
