import Swordsman from '../swordsman';

test('Must correctly create Swordsman character object', () => {
  const expected = {
    name: 'Test',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('Test')).toEqual(expected);
});

test('Метод levelUP должен повышать level на 1, attack и defence на 20% и health = 100', () => {
  const test = new Swordsman('Test');
  test.health = 50;
  test.levelUP();
  expect(test.level).toBe(2);
  expect(test.attack).toBe(48);
  expect(test.defence).toBe(12);
  expect(test.health).toBe(100);
});

test('Метод levelUP должен выбросить ошибку если health = 0', () => {
  const test = new Swordsman('Test');
  test.health = 0;
  expect(() => test.levelUP()).toThrowError('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const testCase = new Swordsman('Test');
  testCase.health = 0;
  testCase.damage(30);
  expect(testCase.health).toBe(0);
});

test('if health > 0 , output health must be correct', () => {
  const testCase = new Swordsman('Test');
  testCase.damage(30);
  expect(testCase.health).toBe(73);
});

test('if health became negative, output health must be 0', () => {
  const testCase = new Swordsman('Test');
  testCase.damage(200);
  expect(testCase.health).toBe(0);
});