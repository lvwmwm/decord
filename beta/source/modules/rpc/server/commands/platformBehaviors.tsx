// Module ID: 15728
// Function ID: 15729
// Name: platformBehaviors
// Dependencies: [1082, 15678, 2]

// Module 15728 (platformBehaviors)
import Constants from "Constants" /* 1082 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15678 */;
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
