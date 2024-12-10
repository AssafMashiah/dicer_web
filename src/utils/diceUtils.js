export const rollDie = (type) => {
  const sides = parseInt(type.substring(1));
  return Math.floor(Math.random() * sides) + 1;
};

export const rollDice = (diceConfig) => {
  return diceConfig.map(type => rollDie(type));
}; 