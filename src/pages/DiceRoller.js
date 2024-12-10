import React, { useState } from 'react';
import styled from 'styled-components';
import { rollDice } from '../utils/diceUtils';
import DiceSelector from '../components/DiceSelector';
import ThrowSelector from '../components/ThrowSelector';
import DiceResults from '../components/DiceResults';
import Button from '../components/Button';

const DiceRoller = () => {
  const [diceConfig, setDiceConfig] = useState([]);
  const [throwCount, setThrowCount] = useState(1);
  const [currentThrow, setCurrentThrow] = useState(0);
  const [results, setResults] = useState([]);
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = async () => {
    if (diceConfig.length === 0) return;

    setIsRolling(true);
    
    // Simulate rolling animation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newResults = [...results];
    newResults[currentThrow] = rollDice(diceConfig);
    setResults(newResults);
    setIsRolling(false);

    // Move to next throw if available
    if (currentThrow < throwCount - 1) {
      setTimeout(() => {
        setCurrentThrow(prev => prev + 1);
      }, 300);
    }
  };

  const handleReset = () => {
    setDiceConfig([]);
    setThrowCount(1);
    setCurrentThrow(0);
    setResults([]);
    setIsRolling(false);
  };

  const canRoll = diceConfig.length > 0 && 
                  currentThrow < throwCount && 
                  !isRolling;

  return (
    <Container>
      <Title>Dice Roller</Title>
      <DiceSelector 
        diceConfig={diceConfig} 
        setDiceConfig={setDiceConfig} 
      />
      <ThrowSelector 
        throwCount={throwCount} 
        setThrowCount={setThrowCount} 
      />
      <DiceResults 
        results={results} 
        currentThrow={currentThrow}
        isRolling={isRolling}
      />
      <ButtonGroup>
        <Button 
          onClick={handleRoll}
          disabled={!canRoll}
        >
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </Button>
        <Button 
          variant="secondary" 
          onClick={handleReset}
          disabled={isRolling}
        >
          Reset
        </Button>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export default DiceRoller; 