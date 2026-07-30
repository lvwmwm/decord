// Module ID: 13558
// Function ID: 13559
// Name: sum
// Dependencies: [505, 2]

// Module 13558 (sum)
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [require(505).RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
