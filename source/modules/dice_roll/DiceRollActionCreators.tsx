// Module ID: 6100
// Function ID: 6101
// Name: startDiceRoll
// Dependencies: [706, 2]
// Exports: startDiceRoll

// Module 6100 (startDiceRoll)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = dispatcherDefault;
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
