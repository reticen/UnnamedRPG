var Character = require('./character.js');

function Player() { 
	this.name = this.name;
	this.isDowned = false;
	this.statusEffects = this.statusEffects;
	this.health = 1; // Come up with some formula that determines base health from stats
	this.strength = this.str;
	this.finesse = this.fin;
	this.intellect = this.intl;
	this.affinity = this.aff;
	this.will = this.wil;
	this.agility = this.agl;
	this.charisma = this.chr;
}

Player.prototype = new Character();
Player.prototype.constructor = Player;

Player.prototype.initPlayer = function(stats) {
	this.name = stats.name;
	this.strength = stats.strength;
	this.finesse = stats.finesse;
	this.intellect = stats.intellect;
	this.affinity = stats.affinity;
	this.will = stats.will;
	this.agility = stats.agility;
	this.charisma = stats.charisma;
};

Player.prototype.levelUp = function(stats) {
	this.strength += stats.strength;
	this.finesse += stats.finesse;
	this.intellect += stats.intellect;
	this.affinity += stats.affinity;
	this.will += stats.will;
	this.agility += stats.agility;
	this.charisma += stats.charisma;
};

module.exports = Player;

// Health: If this runs out, the player will be knocked out and unable to take action. If knocked out, the player regains health in the form of unconscious health.

// Unconscious Health: If this runs out, the player will die. Unconscious health is used in place of normal health when a player is knocked out of a battle. The player can still be hurt if knocked out, and eventually killed.

// Strength: Affects the damage of physical abilities and their critical damage multiplier.

// Finesse: Affects the effectiveness of physical abilities and/or their critical chance.

// Intellect: Affects the damage of magical abilities and their critical damage multiplier.

// Affinity: Affects the effectiveness of magical abilities and/or their critical chance.

// Will: Affects health/unconscious health. With a high enough will stat, the player can potentially survive and stay conscious after devastating or mortal wounds.

// Agility: Affects how nimble the player is. Increases their chance to take the first turn in combat as well as dodge or parry attacks.

// Charisma: Affects conversations.