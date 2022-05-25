class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log("Ninjas name is : " + this.name);
  }
  showStats() {
    console.log("Stats for :" + this.name);
    console.log("Strength :" + this.strength);
    console.log("Speed :" + this.speed);
    console.log("Health :" + this.health);
  }
  drinkSake() {
    this.health += 10;
    console.log(
      this.name + "Sake Drink Power up... Health is now :" + this.health
    );
  }
}

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    this.drinkSake();
    console.log("The one who kills bugs shall be known as: The Debugger");
  }
}
