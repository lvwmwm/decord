// Module ID: 15659
// Function ID: 15660
// Name: commands/conjureDevicePermissions
// Dependencies: [5, 2045, 15660, 6357, 1087, 10756, 15621, 15605, 15661, 584, 2]

// Module 15659 (commands/conjureDevicePermissions)
import Constants2 from "Constants" /* 1087 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10756 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15605 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore" /* 15660 */;
import Constants from "Constants" /* 6357 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15621 */;
import size from "module_2" /* 2 */;

let allowed, c5, closure_2, importDefault;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const set = new Set();
let obj2 = {};
const GET_DEVICE_PERMISSIONS = RPCCommands.GET_DEVICE_PERMISSIONS;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj3 = {
  scope: obj,
  handler(socket) {
    let prop;
    const frame = validateConjureAppFrameDefault(socket.socket).frame;
    let obj = {
      permissions: prop.map((permission) => {
        let obj3;
        let str;
        const obj = conjureDevicePermissions;
        const tmp = frame;
        if (obj.isConjureDevicePermissionSupported(permission)) {
          const obj2 = { permission, state: str };
          str = ConjureDevicePermissionStore.getDecision(tmp.applicationId, permission);
          if (str == null) {
            str = "prompt";
          }
          obj3 = obj2;
        } else {
          obj3 = { permission, state: "unsupported" };
        }
        return obj3;
      })
    };
    prop = frame(10756).CONJURE_DEVICE_PERMISSION_NAMES;
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
    return (async (arg0, value) => {
      let closure_1;
      let tmp;
      if (c5 === 2) {
        c5 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let statuses;
          let frame;
          let found;
          let length;
          c5 = 2;
          if (0 === allowed) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              importDefault = undefined;
              allowed = undefined;
              statuses = function statuses() {
                let obj = {
                  permissions: closure_1_1.map((permission) => {
                    let obj3;
                    let str;
                    const obj = closure_2_0(closure_2_2[5]);
                    const tmp = closure_1_0;
                    if (obj.isConjureDevicePermissionSupported(permission)) {
                      const obj2 = { permission, state: str };
                      str = decision.getDecision(tmp.applicationId, permission);
                      if (str == null) {
                        str = "prompt";
                      }
                      obj3 = obj2;
                    } else {
                      obj3 = { permission, state: "unsupported" };
                    }
                    return obj3;
                  })
                };
                return obj;
              };
              const tmp46 = tmp(closure_2[7])(require);
              frame = tmp46.frame;
              importDefault = importDefault.permissions;
              const iframeId = tmp46.iframeId;
              found = importDefault.filter((permission) => {
                let obj3;
                let str;
                const obj = length(closure_2_2[5]);
                const tmp = closure_1_0;
                if (obj.isConjureDevicePermissionSupported(permission)) {
                  const obj2 = { permission, state: str };
                  str = decision.getDecision(tmp.applicationId, permission);
                  if (str == null) {
                    str = "prompt";
                  }
                  obj3 = obj2;
                } else {
                  obj3 = { permission, state: "unsupported" };
                }
                return "prompt" === obj3.state;
              });
              const application = allowed.getApplication(frame.applicationId);
              length = found.length;
              if (0 !== length) {
                if (null != application) {
                  length = set.has(frame.id);
                  if (!length) {
                    set.add(frame.id);
                    c3 = 1;
                    const obj4 = { appName: application.name, iframeId, permissions: found };
                    length = tmp(closure_2[8])(obj4);
                    allowed = 2;
                    c5 = 1;
                    const obj5 = { value: length, done: false };
                    return obj5;
                  }
                }
              }
              c5 = 3;
              const obj6 = { value: statuses(), done: true };
              return obj6;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            set.delete(frame.id);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            length = set;
            set.delete(frame.id);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            allowed = value;
            if (null != allowed) {
              length = tmp(closure_2[9]);
              let obj = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId: frame.applicationId, permissions: found, allowed };
              length.dispatch(obj);
            }
            c3 = 0;
            length = set;
            set.delete(frame.id);
            c5 = 3;
            const obj8 = { value: statuses(), done: true };
            return obj8;
          }
        } catch (tmp34) {
          closure_2 = tmp34;
          if (0 === c3) {
            c5 = 3;
            throw tmp34;
          } else {
            allowed = 1;
          }
        }
      }
    })();
  }
};
obj2[REQUEST_DEVICE_PERMISSIONS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.REQUEST_DEVICE_PERMISSIONS, obj4);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureDevicePermissions.tsx");

export default obj2;
