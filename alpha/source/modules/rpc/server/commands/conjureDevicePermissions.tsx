// Module ID: 15737
// Function ID: 15738
// Name: commands/conjureDevicePermissions
// Dependencies: [5, 6376, 1087, 15699, 15683, 10797, 10795, 2]

// Module 15737 (commands/conjureDevicePermissions)
import Constants2 from "Constants" /* 1087 */;
import requestConjureDevicePermissions from "requestConjureDevicePermissions" /* 10795 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15683 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 6376 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15699 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const obj2 = {};
const GET_DEVICE_PERMISSIONS = RPCCommands.GET_DEVICE_PERMISSIONS;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj3 = {
  scope: obj,
  handler(socket) {
    let prop;
    const frame = validateConjureAppFrameDefault(socket.socket).frame;
    let obj = {
      permissions: prop.map((item) => {
        const obj = requestConjureDevicePermissions;
        return obj.getConjureDevicePermissionStatus(frame.applicationId, item);
      })
    };
    prop = frame(10797).CONJURE_DEVICE_PERMISSION_NAMES;
    return obj;
  }
};
obj2[GET_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_DEVICE_PERMISSIONS, obj3);
const REQUEST_DEVICE_PERMISSIONS = RPCCommands.REQUEST_DEVICE_PERMISSIONS;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: obj,
  handler(arg0) {
    let permissions;
    ({ socket: require, args: importDefault } = arg0);
    return (async () => {
      let frame;
      let iframeId;
      let obj4;
      let v1;
      const value = { permissions: await c1(c2[6])(obj4) };
      ({ frame, iframeId } = permissions(c2[4])(require));
      obj4 = { applicationId: frame.applicationId, iframeId, permissions: importDefault.permissions };
      const tmp13 = permissions(c2[4])(require);
      return value;
    })();
  }
};
obj2[REQUEST_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.REQUEST_DEVICE_PERMISSIONS, obj4);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureDevicePermissions.tsx");

export default obj2;
