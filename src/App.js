import React, { useState } from 'react';
import DiceSelector from './components/DiceSelector';
import DiceResults from './components/DiceResults';
import { Container } from './components/ui/Container';
import { RollButton } from './components/ui/Button';

const rollDie = (sides) => {
  const max = parseInt(sides.substring(1));
  return Math.floor(Math.random() * max) + 1;
};

const DiceRoller = () => {
  const [diceConfig, setDiceConfig] = useState(['d6']);
  const [results, setResults] = useState(null);

  const handleRoll = () => {
    const newResults = diceConfig.map(die => ({
      die,
      value: rollDie(die)
    }));
    setResults(newResults);
  };

  return (
    <Container>
      <h1>Dice Roller</h1>
      <DiceSelector 
        diceConfig={diceConfig} 
        setDiceConfig={setDiceConfig} 
      />
      <RollButton 
        onClick={handleRoll}
        disabled={diceConfig.length === 0}
      >
        Roll Dice!
      </RollButton>
      <DiceResults results={results} />
    </Container>
  );
};

export default DiceRoller; 