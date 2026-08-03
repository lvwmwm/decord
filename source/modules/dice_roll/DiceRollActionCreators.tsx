// Module ID: 5746
// Function ID: 5747
// Name: startDiceRoll
// Dependencies: [709, 2]
// Exports: startDiceRoll

// Module 5746 (startDiceRoll)
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = importDefault(709);
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
