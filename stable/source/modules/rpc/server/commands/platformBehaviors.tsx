// Module ID: 14070
// Function ID: 14071
// Name: platformBehaviors
// Dependencies: [1097, 2]

// Module 14070 (platformBehaviors)
import Constants from "Constants" /* 1097 */;
import size from "module_2" /* 2 */;

const obj = {
  handler() {
    return { iosKeyboardResizesView: true };
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default { [Constants.RPCCommands.GET_PLATFORM_BEHAVIORS]: obj };
