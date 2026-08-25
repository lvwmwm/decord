// Module ID: 5973
// Function ID: 5974
// Name: startDiceRoll
// Dependencies: [709, 2]
// Exports: startDiceRoll

// Module 5973 (startDiceRoll)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = dispatcherDefault;
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
