class Enemy {
  #health;

  get health() {
    return this.#health;
  }

  set health(value) {
    if (value < 0) {
      this.#health = 0;
    } else {
      this.#health = value;
    }
  }

  constructor(health) {
    this.#health = health;
  }

  sayHiTo(name) {
    console.log(`Hi ${name}, my health is ${this.#health}`);
  }
}

const enemy = new Enemy(100);
enemy.health -= 10;
enemy.sayHiTo('Chris');

console.log(enemy.health);