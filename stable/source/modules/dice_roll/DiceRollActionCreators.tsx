// Module ID: 6667
// Function ID: 6668
// Name: DiceRollActionCreators
// Dependencies: [585, 2]
// Exports: startDiceRoll

// Module 6667 (DiceRollActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj2);
};
