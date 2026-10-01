// Module ID: 14068
// Function ID: 14069
// Name: platformBehaviors
// Dependencies: [1085, 2]

// Module 14068 (platformBehaviors)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const obj = {
  handler() {
    return { iosKeyboardResizesView: true };
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default { [Constants.RPCCommands.GET_PLATFORM_BEHAVIORS]: obj };
