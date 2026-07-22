// Module ID: 13323
// Function ID: 101189
// Name: RPC_LOCAL_SCOPE
// Dependencies: []

// Module 13323 (RPC_LOCAL_SCOPE)
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_3 = importDefault(dependencyMap[0]);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ InstantInviteSources: closure_4, RPCCommands, RPCErrors: closure_5 } = arg1(dependencyMap[2]));
const NativePermissionTypes = arg1(dependencyMap[3]).NativePermissionTypes;
let obj = {};
obj = {};
obj = {};
const items = [arg1(dependencyMap[4]).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(socket) {
  let obj = arg1(dependencyMap[5]);
  const result = obj.validateOpenInviteDialog();
  if (null != result.frame) {
    let tmp10 = importDefault(dependencyMap[6]);
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
    const result1 = arg1(dependencyMap[7]).showInstantInviteActionSheet(tmp2, obj);
  }
};
obj[RPCCommands.OPEN_INVITE_DIALOG] = obj;
const obj1 = {};
const obj2 = {};
const items1 = [arg1(dependencyMap[4]).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[RPC_SCOPE_CONFIG.ANY] = items1;
obj1.scope = obj2;
obj1.handler = function handler(socket) {
  const arg1 = socket.socket;
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.INITIATE_IMAGE_UPLOAD] = obj1;
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/rpc/native/server/commands/activities.tsx");

export default obj;
