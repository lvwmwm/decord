// Module ID: 16024
// Function ID: 16025
// Name: users
// Dependencies: [1389, 6413, 1084, 15987, 9294, 2]

// Module 16024 (users)
import Constants2 from "Constants" /* 1084 */;
import transformUserDefault from "transformUser" /* 9294 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 6413 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15987 */;
import size from "module_2" /* 2 */;

let RPC_EMBEDDED_APP_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
let items1;
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const obj = {};
const GET_USER = RPCCommands.GET_USER;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
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
const GET_CURRENT_USER = RPCCommands.GET_CURRENT_USER;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj3 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  handler() {
    const currentUser = UserStore.getCurrentUser();
    let tmp2 = null;
    if (null != currentUser) {
      tmp2 = transformUserDefault(currentUser);
    }
    return tmp2;
  }
};
items1 = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj[GET_CURRENT_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CURRENT_USER, obj3);
const result = size.fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;
