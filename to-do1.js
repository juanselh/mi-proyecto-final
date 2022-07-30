class pokemon {
 constructor(name) {
  this.name = name[0].toUppercase() + name.slice(1);

  this.powerattack = this.#setpowerattack();
  
  this.powerdefense = this.#setpowerdefense();

 this.healt = 100;
 }   

 #setpowerattack() {
return math.ceil(math.random() * 50 + 25);
 }

 #setpowerdefense(){
  return math.ceil(math.random() * 50 + 25);
   }

   attack() {
    return this.powerattack;
   }
  
   get isAlive () {
    return this.healt > 0;
   }

receivedamage(damage) {
  this.healt -= damage;
}
}

class fight{

  constructor
  this.team1 = team1;
  this.team2 = team2;
}
     
organizeteams(){
  return [fight.team1, fight.team2].sort((a, b) => b.starter - a.starter);
}

 f1vsf2(teamname) {
  const attacker = [this.team1, this.team2].filter(
    team => team.name === teamName
  )[0];

  const defender = [this.team1, this.team2].filter(
    attacker.members[this.numberfight].attack()
  );
 }   
     

