import React from 'react';
import { FlexContainer, ButtonGroup, ChipGroup } from './ui/Container';
import { Button } from './ui/Button';
import { Warning } from './ui/Warning';
import { Chip } from './ui/Chip';

const MAX_DICE = 5;

const DiceSelector = ({ diceConfig, setDiceConfig }) => {
  const diceTypes = ['d4', 'd6', 'd8', 'd10', 'd16', 'd20'];

  const addDie = (dieType) => {
    if (diceConfig.length < MAX_DICE) {
      setDiceConfig([...diceConfig, dieType]);
    }
  };

  const removeDie = (index) => {
    setDiceConfig(diceConfig.filter((_, i) => i !== index));
  };

  return (
    <FlexContainer>
      <ButtonGroup>
        {diceTypes.map((dieType) => (
          <Button
            key={dieType}
            onClick={() => addDie(dieType)}
            disabled={diceConfig.length >= MAX_DICE}
          >
            {dieType}
          </Button>
        ))}
      </ButtonGroup>

      <ChipGroup>
        {diceConfig.map((die, index) => (
          <Chip key={index} onClick={() => removeDie(index)}>
            {die} ×
          </Chip>
        ))}
      </ChipGroup>
      {diceConfig.length >= MAX_DICE && (
        <Warning>Maximum {MAX_DICE} dice allowed</Warning>
      )}
    </FlexContainer>
  );
};

export default DiceSelector; 