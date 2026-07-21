// Module ID: 11091
// Function ID: 86286
// Name: INITIAL_STATE
// Dependencies: []
// Exports: useDiceRollState

// Module 11091 (INITIAL_STATE)
let obj = { <string:74928520>: false, <string:1367481442>: false, <string:4183886667>: false, <string:1663331409>: false, <string:2053760878>: false, <string:474931905>: false };
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
