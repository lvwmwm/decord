// Module ID: 5627
// Function ID: 48034
// Name: startDiceRoll
// Dependencies: [686, 2]
// Exports: startDiceRoll

// Module 5627 (startDiceRoll)
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = importDefault(686);
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
