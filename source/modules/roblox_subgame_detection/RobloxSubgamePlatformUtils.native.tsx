// Module ID: 4299
// Function ID: 37641
// Dependencies: []

// Module 4299
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx");

export default {
  getRobloxSubgameURL(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      const obj = callback(closure_1[1]);
      const obj2 = callback(closure_1[2]);
      if (tmp) {
        let ROBLOX_PROTOCOL_URLResult = obj2.ROBLOX_PROTOCOL_URL(callback);
      } else {
        ROBLOX_PROTOCOL_URLResult = obj2.ROBLOX_DEFERRED_WEB_URL(callback);
      }
      return ROBLOX_PROTOCOL_URLResult;
    })();
  }
};
