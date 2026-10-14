// Module ID: 15128
// Function ID: 15129
// Name: platformBehaviors
// Dependencies: [1096, 2]

// Module 15128 (platformBehaviors)
import Constants from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

const obj = {
  handler() {
    return { iosKeyboardResizesView: true };
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default { [Constants.RPCCommands.GET_PLATFORM_BEHAVIORS]: obj };
