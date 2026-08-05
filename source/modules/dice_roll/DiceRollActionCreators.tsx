// Module ID: 5760
// Function ID: 5761
// Name: startDiceRoll
// Dependencies: [709, 2]
// Exports: startDiceRoll

// Module 5760 (startDiceRoll)
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = importDefault(709);
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
