// Module ID: 13468
// Function ID: 103488
// Name: AM_HARMONY_PRD_APPLICATION_ID
// Dependencies: [5, 4812, 4033, 653, 4155, 482, 10528, 10530, 4814, 10525, 686, 1207, 9009, 4938, 2]

// Module 13468 (AM_HARMONY_PRD_APPLICATION_ID)
import importDefaultResult from "sum";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import items3 from "items3";
import sum from "sum";
import set from "RPC_SCOPE_CONFIG";

let AM_HARMONY_PRD_APPLICATION_ID;
let AM_HARMONY_STG_APPLICATION_ID;
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ AnalyticsLocations: closure_6, ComponentActions: closure_7, PlatformTypes: closure_8 } = ME);
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = items3);
({ RPCCommands, RPCErrors: closure_9 } = sum);
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
let set = new Set(items);
obj = { [RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: obj };
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let obj = importDefault(10528)(string);
    obj = {};
    const requiredResult = obj.required();
    obj.provider = string.string().required();
    obj.connection_redirect = string.string();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const provider = args.provider;
    const connection_redirect = args.connection_redirect;
    let obj = provider(10530);
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = provider(10530);
    const validateApplicationResult = obj1.validateApplication(socket.application);
    const value = connection_redirect(4814).get(provider);
    const dependencyMap = value;
    if (null == value) {
      let tmp29 = connection_redirect(10525);
      obj = { errorCode: constants2.INVALID_PROVIDER };
      const _HermesInternal = HermesInternal;
      const prototype4 = tmp29.prototype;
      tmp29 = new tmp29(obj, "Platform not found for provider \"" + provider + "\"");
      throw tmp29;
    } else if (provider !== constants.AMAZON_MUSIC) {
      let tmp20 = connection_redirect(10525);
      obj = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const prototype3 = tmp20.prototype;
      tmp20 = new tmp20(obj, "Command not available for this application");
      throw tmp20;
    } else if (set.has(validateApplicationResult)) {
      const promise = new Promise((() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_4(tmp);
        return function() {
          return callback(...arguments);
        };
      })());
      return promise;
    } else {
      let tmp6 = connection_redirect(10525);
      obj1 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(obj1, "Command not available for this application");
      throw tmp6;
    }
    const obj3 = connection_redirect(4814);
  }
};
items1 = [RPC_AUTHENTICATED_SCOPE];
obj = { scope: { [RPC_SCOPE_CONFIG.ANY]: items2 }, validation };
items2 = [RPC_AUTHENTICATED_SCOPE];
validation = function validation(string) {
  let obj = importDefault(10528)(string);
  obj = {};
  const requiredResult = obj.required();
  obj.provider = string.string().required();
  return requiredResult.keys(obj);
};
// CreateGeneratorClosureLongIndex (0x67)
let closure_3 = importDefaultResult(validation);
obj.handler = function() {
  return callback(...arguments);
};
obj[RPCCommands.MAYBE_GET_PROVIDER_ACCESS_TOKEN] = obj;
let result = set.fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default obj;
