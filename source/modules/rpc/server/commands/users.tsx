// Module ID: 14091
// Function ID: 14092
// Name: RPC_EMBEDDED_APP_SCOPE
// Dependencies: [1923, 4348, 676, 14063, 9448, 2]

// Module 14091 (RPC_EMBEDDED_APP_SCOPE)
import transformUserDefault from "transformUser" /* 9448 */;
import closure_2 from "mergeGuildAvatar" /* 1923 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4348 */;
import { RPCCommands } from "ME" /* 676 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14063 */;

({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
let obj = {};
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    user = user.getUser(args.args.id);
    let tmp2 = null;
    if (null != user) {
      tmp2 = transformUserDefault(user);
    }
    return tmp2;
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj[RPCCommands.GET_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_USER, obj);
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;
