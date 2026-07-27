// Module ID: 4304
// Function ID: 37694
// Dependencies: [5, 4305, 4303, 2]

// Module 4304
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
const result = require("ROBLOX_PROTOCOL_URL").fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx");

export default {
  getRobloxSubgameURL(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      const obj = callback(outer2_1[1]);
      const obj2 = callback(outer2_1[2]);
      if (tmp) {
        let ROBLOX_PROTOCOL_URLResult = obj2.ROBLOX_PROTOCOL_URL(outer1_0);
      } else {
        ROBLOX_PROTOCOL_URLResult = obj2.ROBLOX_DEFERRED_WEB_URL(outer1_0);
      }
      return ROBLOX_PROTOCOL_URLResult;
    })();
  }
};
