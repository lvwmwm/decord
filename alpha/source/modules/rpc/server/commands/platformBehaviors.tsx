// Module ID: 14347
// Function ID: 14348
// Name: platformBehaviors
// Dependencies: [1096, 2]

// Module 14347 (platformBehaviors)
import Constants from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

const obj = {
  handler() {
    return { iosKeyboardResizesView: true };
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default { [Constants.RPCCommands.GET_PLATFORM_BEHAVIORS]: obj };
