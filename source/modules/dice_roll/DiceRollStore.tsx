// Module ID: 11092
// Function ID: 86299
// Name: INITIAL_STATE
// Dependencies: []
// Exports: useDiceRollState

// Module 11092 (INITIAL_STATE)
let obj = { <string:377406052>: "/assets/images/native/premium/logos", <string:2519880203>: 163.5, <string:2288111497>: 20, <string:1644462929>: null, <string:3882058268>: "cd3f012d84fd9fd0e06d08e5556058d7", <string:3262802425>: "img_logo_nitro_tier_0_horizontal_dark" };
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
