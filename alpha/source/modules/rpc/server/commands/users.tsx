// Module ID: 15088
// Function ID: 15089
// Name: users
// Dependencies: [1390, 5639, 1085, 15057, 10946, 2]

// Module 15088 (users)
import Constants2 from "Constants" /* 1085 */;
import transformUserDefault from "transformUser" /* 10946 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 5639 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15057 */;
import size from "module_2" /* 2 */;

let RPC_EMBEDDED_APP_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const obj = {};
const GET_USER = RPCCommands.GET_USER;
const obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    const user = UserStore.getUser(args.args.id);
    let tmp2 = null;
    if (null != user) {
      tmp2 = transformUserDefault(user);
    }
    return tmp2;
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj[GET_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_USER, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;
