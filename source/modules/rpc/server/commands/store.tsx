// Module ID: 13289
// Function ID: 100961
// Name: getSubscriptionSkusViaListings
// Dependencies: []

// Module 13289 (getSubscriptionSkusViaListings)
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
function getSubscriptionSkusViaListings() {
  return _getSubscriptionSkusViaListings(...arguments);
}
function _getSubscriptionSkusViaListings() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getSubscriptionSkusViaListings = obj;
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
  let obj = arg1(dependencyMap[4]);
  const result = obj.validateTransportType(socket.transport);
  const id = socket.application.id;
  if (null == id) {
    let tmp6 = importDefault(dependencyMap[5]);
    obj = { errorCode: constants.INVALID_COMMAND };
    const prototype = tmp6.prototype;
    tmp6 = new tmp6(obj, "No application.");
    throw tmp6;
  } else {
    return importAll(dependencyMap[9]).fetchUserEntitlementsForApplication(id);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ CurrencyCodes: closure_5, RPCCommands, RPCErrors: closure_6, SKUTypes: closure_7 } = arg1(dependencyMap[2]));
const items = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
const items1 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
let obj = {
  [RPC_SCOPE_CONFIG.ANY]: items2,
  ["handler"]: function handler(arg0) {
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
const items2 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj = {
  [RPC_SCOPE_CONFIG.ANY]: items3,
  ["handler"]: function handler(arg0) {
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
const items3 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/rpc/server/commands/store.tsx");

export default { [RPCCommands.GET_SKUS]: { [RPC_SCOPE_CONFIG.ANY]: items, ["handler"]: getSkusHandler }, [RPCCommands.GET_ENTITLEMENTS]: { [RPC_SCOPE_CONFIG.ANY]: items1, ["handler"]: getEntitlementsHandler }, [RPCCommands.GET_SKUS_EMBEDDED]: obj, [RPCCommands.GET_ENTITLEMENTS_EMBEDDED]: obj };
