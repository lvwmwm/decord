// Module ID: 14882
// Function ID: 14883
// Name: platformBehaviors
// Dependencies: [1085, 2]

// Module 14882 (platformBehaviors)
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
