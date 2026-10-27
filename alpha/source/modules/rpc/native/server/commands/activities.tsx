// Module ID: 15809
// Function ID: 15810
// Name: commands/activities
// Dependencies: [5, 6379, 1084, 7869, 15761, 8827, 15771, 9264, 9050, 9258, 6779, 10731, 8153, 7886, 11397, 6376, 2]

// Module 15809 (commands/activities)
import NativePermissionConstants from "NativePermissionConstants" /* 7869 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8827 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9050 */;
import RPCErrorDefault from "RPCError" /* 9264 */;
import validateOpenInviteDialog from "validateOpenInviteDialog" /* 15771 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants_mod from "Constants" /* 6379 */;
import Constants_mod2 from "Constants" /* 1084 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15761 */;
import size from "module_2" /* 2 */;

let c2, c3, c4;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_4;
let hasOwnProperty;
let obj3;
let obj5;
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let obj = {};
const OPEN_INVITE_DIALOG = RPCCommands.OPEN_INVITE_DIALOG;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: obj3,
  handler(socket) {
    let id;
    socket = socket.socket;
    const obj = validateOpenInviteDialog;
    const result = obj.validateOpenInviteDialog(socket);
    if (null != result.frameId) {
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: hasOwnProperty.UNKNOWN_ERROR };
      const tmp11 = new RPCErrorDefault(obj2, "Cannot support frames (yet)");
      throw tmp11;
    } else {
      const obj3 = { source: constants.ACTIVITY_INVITE, targetApplicationId: id };
      id = socket.application.id;
      const showInstantInviteActionSheet = tmp(9050).showInstantInviteActionSheet;
      instant_invite_InstantInviteUtils;
      const result1 = showInstantInviteActionSheet(tmp4, obj3);
    }
  }
};
obj3 = {};
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const OPEN_INVITE_DIALOG2 = RPCCommands.OPEN_INVITE_DIALOG;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3[ANY] = items;
obj[OPEN_INVITE_DIALOG] = createRPCCommand(OPEN_INVITE_DIALOG2, obj2);
const INITIATE_IMAGE_UPLOAD = RPCCommands.INITIATE_IMAGE_UPLOAD;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: obj5,
  handler(socket) {
    socket = socket.socket;
    return (async function(arg0, value) {
      let closure_0;
      let closure_1;
      let obj11;
      let obj13;
      let obj19;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let obj6;
          let closure_3;
          let closure_4;
          let closure_5;
          let id;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              socket = tmp4;
              tmp = undefined;
              obj6 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              id = socket.application.id;
              if (null == id) {
                const obj4 = { errorCode: constants2.INVALID_COMMAND };
                const self11 = this;
                const self12 = this;
                const tmp70 = new tmp(c2[7])(obj4, "No application.");
                throw tmp70;
              } else {
                let tmp49;
                if (tmp(c2[9])(socket)) {
                  tmp49 = tmp(c2[10])(tmp92.context.surface);
                }
                tmp = tmp49;
                if (null == tmp49) {
                  const obj5 = { errorCode: constants2.UNKNOWN_ERROR };
                  const self9 = this;
                  const self10 = this;
                  const tmp64 = new tmp(c2[7])(obj5, "Unable to find selected channel");
                  throw tmp64;
                } else {
                  obj6 = { mediaType: "photo", includeBase64: false, selectionLimit: 1 };
                  const obj22 = tmp(c2[12]);
                  if (!obj22.canUseAndroidPhotoPicker(obj6)) {
                    c2 = 1;
                    c3 = 3;
                    c4 = 1;
                    const obj7 = { value: obj11.requestPermission(constants.PHOTOS), done: false };
                    obj11 = tmp(c2[13]);
                    return obj7;
                  }
                }
              }
            }
          } else if (1 === c3) {
            c2 = 0;
            const obj8 = { errorCode: constants2.UNKNOWN_ERROR };
            const self7 = this;
            const self8 = this;
            const tmp45 = new tmp(c2[7])(obj8, "Failed requesting photo permissions");
            throw tmp45;
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_4 = value.assets[0];
              if (null == closure_4) {
                const obj10 = { errorCode: constants2.UNKNOWN_ERROR };
                const self5 = this;
                const self6 = this;
                const tmp38 = new tmp(c2[7])(obj10, "No image selected");
                throw tmp38;
              } else {
                const obj12 = { name: closure_4.fileName, type: closure_4.type, uri: closure_4.uri };
                c3 = 4;
                c4 = 1;
                const obj14 = { value: obj19.uploadImageAttachment(id, tmp, obj12), done: false };
                obj19 = socket(c2[14]);
                return obj14;
              }
            }
          } else if (3 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c4 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_3 = value;
              c2 = 0;
              const tmp25 = closure_3;
              if (!tmp25) {
                const obj16 = { errorCode: constants2.UNKNOWN_ERROR };
                const self3 = this;
                const self4 = this;
                const tmp31 = new tmp(c2[7])(obj16, "Missing photo permissions");
                throw tmp31;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            closure_5 = value;
            if (null != closure_5) {
              if (null != closure_5.url) {
                if (!(closure_5 instanceof tmp(c2[15]))) {
                  const obj = { image_url: closure_5.url };
                  c4 = 3;
                  const obj18 = { value: obj, done: true };
                  return obj18;
                }
              }
            }
            const obj20 = { errorCode: constants2.UNKNOWN_ERROR };
            const _JSON = JSON;
            const self = this;
            const self2 = this;
            const tmp18 = tmp(c2[7]);
            const tmp182 = new tmp18(obj20, JSON.stringify(closure_5));
            throw tmp182;
          }
          c3 = 2;
          c4 = 1;
          const obj21 = { value: obj13.launchImageLibraryAsync(obj6), done: false };
          obj13 = tmp(c2[12]);
          return obj21;
        } catch (tmp72) {
          if (0 === c2) {
            c4 = 3;
            throw tmp72;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  }
};
obj5 = {};
const createRPCCommand2 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const INITIATE_IMAGE_UPLOAD2 = RPCCommands.INITIATE_IMAGE_UPLOAD;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj5[ANY2] = items1;
obj[INITIATE_IMAGE_UPLOAD] = createRPCCommand2(INITIATE_IMAGE_UPLOAD2, obj4);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;
