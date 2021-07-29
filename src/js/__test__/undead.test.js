import Undead from '../undead';

test('Must correctly create Undead character object', () => {
  const expected = {
    name: 'Test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('Test')).toEqual(expected);
});

test('Метод levelUP должен повышать level на 1, attack и defence на 20% и health = 100', () => {
  const test = new Undead('Test');
  test.health = 50;
  test.levelUP();
  expect(test.level).toBe(2);
  expect(test.attack).toBe(30);
  expect(test.defence).toBe(30);
  expect(test.health).toBe(100);
});

test('Метод levelUP должен выбросить ошибку если health = 0', () => {
  const test = new Undead('Test');
  test.health = 0;
  expect(() => test.levelUP()).toThrowError('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const testCase = new Undead('Test');
  testCase.health = 0;
  testCase.damage(30);
  expect(testCase.health).toBe(0);
});

test('if health > 0 , output health must be correct', () => {
  const testCase = new Undead('Test');
  testCase.damage(30);
  expect(testCase.health).toBe(77.5);
});

test('if health became negative, output health must be 0', () => {
  const testCase = new Undead('Test');
  testCase.damage(200);
  expect(testCase.health).toBe(0);
});