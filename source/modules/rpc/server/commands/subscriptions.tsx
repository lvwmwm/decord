// Module ID: 13479
// Function ID: 103626
// Dependencies: [5, 653, 10525, 13480, 675, 13481, 2]

// Module 13479
import getInitialSubscriptionPayload from "getInitialSubscriptionPayload";
import ME from "ME";

let RPCCommands;
let closure_4;
let closure_5;
const require = arg1;
({ AnalyticEvents: closure_4, RPCCommands, RPCErrors: closure_5 } = ME);
let obj = {
  handler(arg0) {
    let getInitialSubscriptionPayload;
    let dependencyMap;
    let importDefault;
    let require;
    ({ server: require, socket: importDefault, evt: dependencyMap, args: getInitialSubscriptionPayload } = arg0);
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
obj = {
  handler(arg0) {
    let evt;
    let server;
    ({ server, evt } = arg0);
    if (null == server.events[evt]) {
      let tmp6 = importDefault(10525);
      let obj = { errorCode: constants.INVALID_EVENT };
      const _HermesInternal = HermesInternal;
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(obj, "Invalid event: " + evt);
      throw tmp6;
    } else {
      server.removeSubscription(tmp, evt, tmp2);
      obj = { evt };
      return obj;
    }
  }
};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default { [RPCCommands.SUBSCRIBE]: obj, [RPCCommands.UNSUBSCRIBE]: obj };
