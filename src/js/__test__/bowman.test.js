import Bowman from '../bowman';

test('Must correctly create Bowman character object', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('Test')).toEqual(expected);
});

test('Метод levelUP должен повышать level на 1, attack и defence на 20% и health = 100', () => {
  const test = new Bowman('Test');
  test.health = 50;
  test.levelUP();
  expect(test.level).toBe(2);
  expect(test.attack).toBe(30);
  expect(test.defence).toBe(30);
  expect(test.health).toBe(100);
});

test('Метод levelUP должен выбросить ошибку если health = 0', () => {
  const test = new Bowman('Test');
  test.health = 0;
  expect(() => test.levelUP()).toThrowError('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const test = new Bowman('Test');
  test.health = 0;
  test.damage(30);
  expect(test.health).toBe(0);
});

test('if health > 0 , output health must be correct', () => {
  const test = new Bowman('Test');
  test.damage(30);
  expect(test.health).toBe(77.5);
});

test('if health became negative, output health must be 0', () => {
  const test = new Bowman('Test');
  test.damage(200);
  expect(test.health).toBe(0);
});