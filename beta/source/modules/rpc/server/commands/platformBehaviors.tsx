// Module ID: 16349
// Function ID: 16350
// Name: platformBehaviors
// Dependencies: [1083, 16301, 2]

// Module 16349 (platformBehaviors)
import Constants from "Constants" /* 1083 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16301 */;
import size from "module_2" /* 2 */;

const RPCCommands = Constants.RPCCommands;
const obj = {};
const GET_PLATFORM_BEHAVIORS = RPCCommands.GET_PLATFORM_BEHAVIORS;
const obj2 = {
  handler() {
    return { iosKeyboardResizesView: true };
  }
};
obj[GET_PLATFORM_BEHAVIORS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_PLATFORM_BEHAVIORS, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default obj;
