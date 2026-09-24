// Module ID: 7524
// Function ID: 7525
// Name: DiceRollActionCreators
// Dependencies: [577, 2]
// Exports: startDiceRoll

// Module 7524 (DiceRollActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  DispatcherDefault.dispatch({ type: "DICE_ROLL_START", channelId, diceCount, diceSides });
};
