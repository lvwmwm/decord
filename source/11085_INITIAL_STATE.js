// Module ID: 11085
// Function ID: 86252
// Name: INITIAL_STATE
// Dependencies: []
// Exports: useDiceRollState

// Module 11085 (INITIAL_STATE)
let obj = { "Bool(false)": "is", "Bool(false)": "key", "Bool(false)": "language", "Bool(false)": "labeled", "Bool(false)": "level", "Bool(false)": "live" };
const _module = require(dependencyMap[0]);
obj = _module.create(() => obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/dice_roll/DiceRollStore.tsx");

export default obj;
export const INITIAL_STATE = obj;
export const useDiceRollState = function useDiceRollState(channelId) {
  return channelId((channelId) => {
    let tmp = null;
    if (channelId.channelId === channelId) {
      tmp = channelId;
    }
    return tmp;
  });
};
