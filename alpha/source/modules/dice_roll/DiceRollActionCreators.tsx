// Module ID: 7490
// Function ID: 7491
// Name: DiceRollActionCreators
// Dependencies: [573, 2]
// Exports: startDiceRoll

// Module 7490 (DiceRollActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  DispatcherDefault.dispatch({ type: "DICE_ROLL_START", channelId, diceCount, diceSides });
};
