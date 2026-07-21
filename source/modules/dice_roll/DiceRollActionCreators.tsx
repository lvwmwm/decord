// Module ID: 5625
// Function ID: 47994
// Name: startDiceRoll
// Dependencies: []
// Exports: startDiceRoll

// Module 5625 (startDiceRoll)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
