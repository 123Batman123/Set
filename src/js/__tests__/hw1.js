import Team from '../hw1';
import Character from '../Character';

test('test Team add', () => {
  const team = new Team();
  const player1 = new Character('Mage', 100);
  team.add(player1);
  expect(team.members.has(player1)).toBe(true);
});

test('test Team add 2 player1', () => {
  const team = new Team();
  const player1 = new Character('Mage', 100);
  team.add(player1);
  expect(() => { team.add(player1); }).toThrowError();
});

test('test Team addAll and Team toArray', () => {
  const team = new Team();
  const player1 = new Character('Mage', 100);
  const player2 = new Character('Paladin', 200);
  team.addAll(player1, player2);
  expect(team.toArray()).toEqual([
    { name: 'Mage', health: 100 },
    { name: 'Paladin', health: 200 },
  ]);
});
