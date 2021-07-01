const Potion = require('../lib/Potion');
const Enemy = require('../lib/Enemy');
const { TestWatcher } = require('jest');

jest.mock('../lib/Potion');

test('creates an enemy object', () => {
    const enemy = new Enemy('Dio','stand');

    expect(enemy.name).toBe('Dio');
    expect(enemy.weapon).toBe('stand')
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
})

test("gets enemy's health value", () => {
    const enemy = new Enemy('Dio','sword');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('Dio','sword');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy's health", () => {
    const enemy = new Enemy('Dio','sword');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(9999999);

    expect(enemy.health).toBe(0);
});

test("gets enemy's attack value", () => {
    const enemy = new Enemy('Dio','sword');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test("gets the name of the enemy's weapon", () => {
    const enemy = new Enemy('Dio','sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('Dio'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
})