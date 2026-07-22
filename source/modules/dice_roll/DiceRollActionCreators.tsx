// Module ID: 5624
// Function ID: 48010
// Name: startDiceRoll
// Dependencies: []
// Exports: startDiceRoll

// Module 5624 (startDiceRoll)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/dice_roll/DiceRollActionCreators.tsx");

export const startDiceRoll = function startDiceRoll(channelId, diceCount, diceSides) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DICE_ROLL_START", channelId, diceCount, diceSides };
  obj.dispatch(obj);
};
