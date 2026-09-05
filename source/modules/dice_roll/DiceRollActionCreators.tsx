// Module ID: 7245
// Function ID: 7246
// Name: startDiceRoll
// Dependencies: [573, 2]
// Exports: startDiceRoll

// Module 7245 (startDiceRoll)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = dispatcherDefault;
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
