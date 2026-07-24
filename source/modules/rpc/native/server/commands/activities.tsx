// Module ID: 13490
// Function ID: 103672
// Name: RPC_LOCAL_SCOPE
// Dependencies: [5, 4033, 653, 4344, 8354, 13459, 10525, 8526, 13448, 4675, 4686, 10515, 4030, 2]

// Module 13490 (RPC_LOCAL_SCOPE)
import validateOpenInviteDialog from "validateOpenInviteDialog";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_4;
let closure_5;
const require = arg1;
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: closure_5 } = ME);
let obj = {};
obj = {};
obj = {};
const items = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(socket) {
  let obj = require(13459) /* validateOpenInviteDialog */;
  const result = obj.validateOpenInviteDialog();
  if (null != result.frame) {
    let tmp10 = importDefault(10525);
    obj = { errorCode: constants2.UNKNOWN_ERROR };
    const prototype = tmp10.prototype;
    tmp10 = new tmp10(obj, "Cannot support frames (yet)");
    throw tmp10;
  } else {
    obj = { source: constants.ACTIVITY_INVITE };
    const id = socket.socket.application.id;
    let tmp6;
    if (null != id) {
      tmp6 = id;
    }
    obj.targetApplicationId = tmp6;
    const result1 = require(8526) /* showInstantInviteActionSheet */.showInstantInviteActionSheet(tmp2, obj);
  }
};
obj[RPCCommands.OPEN_INVITE_DIALOG] = obj;
const obj1 = {};
const obj2 = {};
const items1 = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[RPC_SCOPE_CONFIG.ANY] = items1;
obj1.scope = obj2;
obj1.handler = function handler(socket) {
  socket = socket.socket;
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.INITIATE_IMAGE_UPLOAD] = obj1;
let result = require("ME").fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;
