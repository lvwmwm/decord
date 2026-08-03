// Module ID: 13645
// Function ID: 13646
// Name: sum
// Dependencies: [505, 2]

// Module 13645 (sum)
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require(505).RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
