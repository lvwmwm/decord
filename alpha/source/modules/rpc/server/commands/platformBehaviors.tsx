// Module ID: 14277
// Function ID: 14278
// Name: platformBehaviors
// Dependencies: [1085, 2]

// Module 14277 (platformBehaviors)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [Constants.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
