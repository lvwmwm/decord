// Module ID: 14790
// Function ID: 14791
// Name: platformBehaviors
// Dependencies: [1089, 2]

// Module 14790 (platformBehaviors)
import Constants from "Constants" /* 1089 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [Constants.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
