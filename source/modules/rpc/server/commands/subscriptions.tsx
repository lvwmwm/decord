// Module ID: 13296
// Function ID: 101065
// Dependencies: [4031, 653, 10482, 13306, 10479, 2, 1348]

// Module 13296
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let RPCCommands;
({ AnalyticEvents: closure_4, RPCCommands, RPCErrors: closure_5 } = ME);
let obj = {
  handler(arg0) {
    ({ server: closure_0, socket: closure_1, evt: closure_2, args: RPC_SCOPE_CONFIG } = arg0);
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
      let tmp6 = importDefault(dependencyMap[2]);
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
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/rpc/server/commands/subscriptions.tsx");

export default { [RPCCommands.SUBSCRIBE]: obj, [RPCCommands.UNSUBSCRIBE]: obj };
