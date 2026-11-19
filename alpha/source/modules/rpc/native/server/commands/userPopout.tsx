// Module ID: 15672
// Function ID: 15673
// Name: userPopout
// Dependencies: [6233, 1072, 15593, 15638, 2]

// Module 15672 (userPopout)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 6233 */;
import commands_userProfile from "commands/userProfile" /* 15638 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15593 */;
import size from "module_2" /* 2 */;

const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
const RPCCommands = Constants.RPCCommands;
let obj = {};
const OPEN_USER_POPOUT = RPCCommands.OPEN_USER_POPOUT;
const obj2 = {
  scope: RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    socket = socket.socket;
    const user_id = socket.args.user_id;
    const obj = commands_userProfile;
    return obj.openUserProfileForSocket(socket, user_id);
  }
};
obj[OPEN_USER_POPOUT] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_POPOUT, obj2);
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/userPopout.tsx");

export default obj;
