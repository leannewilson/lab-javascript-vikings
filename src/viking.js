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
      console.log(this.health)
  }
}

let greenSoldier = new Soldier(100, 100);
let redSoldier = new Soldier(200, 100);

greenSoldier.receiveDamage(redSoldier.attack());
redSoldier.receiveDamage(greenSoldier.attack());
console.log(greenSoldier, redSoldier);

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
let viking2 = new Viking ('Ken', 100, 100);
console.log(viking1.battleCry());
console.log(viking1.receiveDamage(viking1.attack()));
console.log(viking1);
console.log(viking2);


// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health -= damage
    
    console.log(this.health)

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } {
      return `A Saxon has died in combat`
    }
  }
}

let sexySaxon = new Saxon (100, 100);
let sassySaxon = new Saxon (500, 100);
console.log(sexySaxon.receiveDamage(viking2.attack()))
console.log(sassySaxon.receiveDamage(viking2.attack()))
console.log(sexySaxon)
console.log(sassySaxon)

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
 
    addViking(v) {
      this.vikingArmy.push(v);
    }

    addSaxon(s) {
      this.saxonArmy.push(s);
    }
      
    vikingAttack() {
      let randomIndex = Math.floor(Math.random()* this.saxonArmy.length);
      let saxon = this.saxonArmy[randomIndex]
      let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      
      let saxonDamage = viking.strength
      saxon.receiveDamage(saxonDamage)

      console.log(saxon.health)

      if (saxon.health <= 0){
        this.saxonArmy.splice(this.saxonArmy[randomIndex,1])
        return `A Saxon has died in combat`
      } {
        return saxonDamage
      }
      }

    saxonAttack() {
      let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

      let damage = saxon.strength
      viking.receiveDamage(damage)

      console.log(viking.health)

      if (viking.health <= 0){
        this.vikingArmy.splice(this.vikingArmy[saxon])
        return `A Viking has died in combat`
      } {
        return `Harald has received ${damage} points of damage`
      }
      
    }

    showStatus() {
      if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`
      } else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`
      } else {
        return `Vikings and Saxons are still in the thick of battle.`
      }
    }
}


let fight = new War ()
console.log(fight.addViking(viking1))
console.log(fight.addViking(viking2))
console.log(fight.addSaxon(sexySaxon))
console.log(fight.addSaxon(sassySaxon))
console.log(fight.vikingArmy)
console.log(fight.saxonArmy)
console.log(fight.vikingAttack())
// fight.saxonAttack()
// fight.vikingAttack()
// console.log(fight.showStatus())


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
