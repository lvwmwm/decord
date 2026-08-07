// Module ID: 5806
// Function ID: 5807
// Name: startDiceRoll
// Dependencies: [709, 2]
// Exports: startDiceRoll

// Module 5806 (startDiceRoll)
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = importDefault(709);
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
