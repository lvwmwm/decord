// Module ID: 13292
// Function ID: 100950
// Name: AM_HARMONY_PRD_APPLICATION_ID
// Dependencies: []

// Module 13292 (AM_HARMONY_PRD_APPLICATION_ID)
let AM_HARMONY_PRD_APPLICATION_ID;
let AM_HARMONY_STG_APPLICATION_ID;
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ AnalyticsLocations: closure_6, ComponentActions: closure_7, PlatformTypes: closure_8 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = arg1(dependencyMap[4]));
const tmp5 = arg1(dependencyMap[4]);
({ RPCCommands, RPCErrors: closure_9 } = arg1(dependencyMap[5]));
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
const set = new Set(items);
let obj = { [RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: obj };
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let obj = importDefault(dependencyMap[6])(string);
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
    const arg1 = provider;
    const importDefault = args.connection_redirect;
    let obj = arg1(dependencyMap[7]);
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = arg1(dependencyMap[7]);
    const validateApplicationResult = obj1.validateApplication(socket.application);
    const value = importDefault(dependencyMap[8]).get(provider);
    const dependencyMap = value;
    if (null == value) {
      let tmp29 = importDefault(dependencyMap[9]);
      obj = { errorCode: constants2.INVALID_PROVIDER };
      const _HermesInternal = HermesInternal;
      const prototype4 = tmp29.prototype;
      tmp29 = new tmp29(obj, "Platform not found for provider \"" + provider + "\"");
      throw tmp29;
    } else if (provider !== constants.AMAZON_MUSIC) {
      let tmp20 = importDefault(dependencyMap[9]);
      obj = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const prototype3 = tmp20.prototype;
      tmp20 = new tmp20(obj, "Command not available for this application");
      throw tmp20;
    } else if (set.has(validateApplicationResult)) {
      const promise = new Promise(() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }());
      return promise;
    } else {
      let tmp6 = importDefault(dependencyMap[9]);
      obj1 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(obj1, "Command not available for this application");
      throw tmp6;
    }
    const obj3 = importDefault(dependencyMap[8]);
  }
};
const items1 = [RPC_AUTHENTICATED_SCOPE];
obj = { scope: { [RPC_SCOPE_CONFIG.ANY]: items2 }, validation };
const items2 = [RPC_AUTHENTICATED_SCOPE];
function validation(string) {
  let obj = importDefault(dependencyMap[6])(string);
  obj = {};
  const requiredResult = obj.required();
  obj.provider = string.string().required();
  return requiredResult.keys(obj);
}
// CreateGeneratorClosureLongIndex (0x67)
let closure_3 = importDefaultResult(validation);
obj.handler = function() {
  return callback(...arguments);
};
obj[RPCCommands.MAYBE_GET_PROVIDER_ACCESS_TOKEN] = obj;
const tmp6 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default obj;
