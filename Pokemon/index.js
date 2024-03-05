let trainer = {
    name: 'Nicholas',
    age: 18,
    pokemonList: [],

    addPokemon: function(pokemon) {
        this.pokemonList.push(pokemon);
        console.log(`${pokemon.name} added to ${this.name}'s team!`);

    }
};

console.log(`Trainer: ${trainer.name}, Age: ${trainer.age}`);


console.log(`Trainer Name (Dot Notation): ${trainer.name}`); 
console.log(`Trainer Age (Bracket Notation): ${trainer['age']}`);




let myPokemon = {
    name: 'Charmander',
    level: 5,
    health: 98,
    attack: 33,
    tackle: function() {
        console.log('The pokemon tackle the target pokemon');
        console.log("targetPokemon");
    }
};



function Pokemon(name, level, health, attack) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
}


Pokemon.prototype.attackOpponent = function(opponent) {
    console.log(`${this.name} attacks ${opponent.name}!`);
    opponent.health -= this.attack; 
    console.log(`${opponent.name}'s health reduced to ${opponent.health}`);

    while (this.health > 0 && opponent.health > 0) {
       opponent.health -= this.attack;

        if (opponent.health <= 0) {
            console.log(`${opponent.name} fainted. ${this.name} wins the battle!`);
            break;
        }


    }
};


let charmander = new Pokemon('Charmander', 5, 95, 33);
trainer.addPokemon(charmander);

let pidgey = new Pokemon('Pidgey', 5, 93, 28);

let caterpie = new Pokemon('Caterpie', 5, 90, 25);


charmander.attackOpponent(pidgey);

trainer.addPokemon(pidgey);

pidgey.attackOpponent(caterpie);

trainer.addPokemon(caterpie);