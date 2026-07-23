// Module ID: 13419
// Function ID: 103195
// Name: getSubscriptionSkusViaListings
// Dependencies: [5, 4033, 653, 13420, 13421, 10496, 7369, 7367, 13422, 6638, 2]

// Module 13419 (getSubscriptionSkusViaListings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function getSubscriptionSkusViaListings() {
  return _getSubscriptionSkusViaListings(...arguments);
}
function _getSubscriptionSkusViaListings() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function getSkusHandler() {
  return _getSkusHandler(...arguments);
}
function _getSkusHandler() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function getEntitlementsHandler(socket) {
  socket = socket.socket;
  let obj = require(13421) /* validateTransportType */;
  const result = obj.validateTransportType(socket.transport);
  const id = socket.application.id;
  if (null == id) {
    let tmp6 = importDefault(10496);
    obj = { errorCode: constants.INVALID_COMMAND };
    const prototype = tmp6.prototype;
    tmp6 = new tmp6(obj, "No application.");
    throw tmp6;
  } else {
    return importAll(6638).fetchUserEntitlementsForApplication(id);
  }
}
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ CurrencyCodes: closure_5, RPCCommands, RPCErrors: closure_6, SKUTypes: closure_7 } = ME);
const items = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
const items1 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let obj = {
  [RPC_SCOPE_CONFIG.ANY]: items2,
  ["handler"]: function handler(arg0) {
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj = {
  [RPC_SCOPE_CONFIG.ANY]: items3,
  ["handler"]: function handler(arg0) {
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
items3 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let result = require("ME").fileFinishedImporting("modules/rpc/server/commands/store.tsx");

export default { [RPCCommands.GET_SKUS]: { [RPC_SCOPE_CONFIG.ANY]: items, ["handler"]: getSkusHandler }, [RPCCommands.GET_ENTITLEMENTS]: { [RPC_SCOPE_CONFIG.ANY]: items1, ["handler"]: getEntitlementsHandler }, [RPCCommands.GET_SKUS_EMBEDDED]: obj, [RPCCommands.GET_ENTITLEMENTS_EMBEDDED]: obj };
