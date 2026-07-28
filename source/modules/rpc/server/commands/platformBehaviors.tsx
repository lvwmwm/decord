// Module ID: 13540
// Function ID: 103949
// Name: sum
// Dependencies: [482, 2]

// Module 13540 (sum)
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require(482).RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
