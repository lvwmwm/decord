// Module ID: 13484
// Function ID: 103644
// Name: sum
// Dependencies: [482, 2]

// Module 13484 (sum)
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require(482).RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
