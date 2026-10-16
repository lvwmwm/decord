// Module ID: 15468
// Function ID: 15469
// Name: commands/activities
// Dependencies: [5, 5857, 1087, 7702, 15422, 8684, 15434, 11250, 8908, 15408, 10953, 10949, 7989, 7719, 11173, 5854, 2]

// Module 15468 (commands/activities)
import NativePermissionConstants from "NativePermissionConstants" /* 7702 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8684 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8908 */;
import RPCErrorDefault from "RPCError" /* 11250 */;
import validateOpenInviteDialog from "validateOpenInviteDialog" /* 15434 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants_mod from "Constants" /* 5857 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15422 */;
import size from "module_2" /* 2 */;

let c2, c3;

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
      const showInstantInviteActionSheet = tmp(8908).showInstantInviteActionSheet;
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
      let tmp;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          let tmp2;
          let obj6;
          let closure_3;
          let closure_4;
          let id;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp2 = undefined;
              obj6 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              id = socket.application.id;
              if (null == id) {
                const obj4 = { errorCode: constants.INVALID_COMMAND };
                const self9 = this;
                const self10 = this;
                const tmp63 = new tmp2(c2[7])(obj4, "No application.");
                throw tmp63;
              } else {
                let tmp42;
                if (tmp2(c2[9])(socket)) {
                  tmp42 = tmp2(c2[10])(tmp84.context.surface);
                }
                tmp2 = tmp42;
                if (null == tmp42) {
                  const obj5 = { errorCode: constants.UNKNOWN_ERROR };
                  const self7 = this;
                  const self8 = this;
                  const tmp57 = new tmp2(c2[7])(obj5, "Unable to find selected channel");
                  throw tmp57;
                } else {
                  obj6 = { mediaType: "photo", includeBase64: false, selectionLimit: 1 };
                  const obj21 = tmp2(c2[12]);
                  if (!obj21.canUseAndroidPhotoPicker(obj6)) {
                    const obj10 = tmp2(c2[13]);
                    const permission = obj10.requestPermission(constants2.PHOTOS);
                    c2 = 2;
                    c3 = 1;
                    const obj7 = {
                      value: permission.catch(() => {
                                      const obj = { errorCode: constants.UNKNOWN_ERROR };
                                      const tmp = new closure_1_1(closure_1_2[7])(obj, "Failed requesting photo permissions");
                                      throw tmp;
                                    }),
                      done: false
                    };
                    return obj7;
                  }
                }
              }
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_3 = value.assets[0];
              if (null == closure_3) {
                const obj9 = { errorCode: constants.UNKNOWN_ERROR };
                const self5 = this;
                const self6 = this;
                const tmp38 = new tmp2(c2[7])(obj9, "No image selected");
                throw tmp38;
              } else {
                const obj11 = { name: closure_3.fileName, type: closure_3.type, uri: closure_3.uri };
                const obj18 = tmp(c2[14]);
                c2 = 3;
                c3 = 1;
                const obj13 = { value: obj18.uploadImageAttachment(id, tmp2, obj11), done: false };
                return obj13;
              }
            }
          } else if (2 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else if (!value) {
              const obj15 = { errorCode: constants.UNKNOWN_ERROR };
              const self3 = this;
              const self4 = this;
              const tmp31 = new tmp2(c2[7])(obj15, "Missing photo permissions");
              throw tmp31;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            closure_4 = value;
            if (null != closure_4) {
              if (null != closure_4.url) {
                if (!(closure_4 instanceof tmp2(c2[15]))) {
                  let obj = { image_url: closure_4.url };
                  c3 = 3;
                  const obj17 = { value: obj, done: true };
                  return obj17;
                }
              }
            }
            const obj19 = { errorCode: constants.UNKNOWN_ERROR };
            const _JSON = JSON;
            const self = this;
            const self2 = this;
            const tmp19 = tmp2(c2[7]);
            const tmp192 = new tmp19(obj19, JSON.stringify(closure_4));
            throw tmp192;
          }
          const obj12 = tmp2(c2[12]);
          c2 = 1;
          c3 = 1;
          const obj20 = { value: obj12.launchImageLibraryAsync(obj6), done: false };
          return obj20;
        } catch (tmp65) {
          c3 = 3;
          throw tmp65;
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
