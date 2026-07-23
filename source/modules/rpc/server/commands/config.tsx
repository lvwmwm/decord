// Module ID: 13399
// Function ID: 103051
// Dependencies: [4033, 653, 10499, 10496, 686, 2]

// Module 13399
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";

const TransportTypes = RPC_SCOPE_CONFIG.TransportTypes;
const RPCErrors = ME.RPCErrors;
const result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default {
  [ME.RPCCommands.SET_CONFIG]: {
    scope: RPC_SCOPE_CONFIG.RPC_AUTHENTICATED_SCOPE,
    validation(boolean) {
      let obj = importDefault(10499)(boolean);
      obj = { use_interactive_pip: boolean.boolean() };
      return obj.required().keys(obj);
    },
    handler(socket) {
      socket = socket.socket;
      const use_interactive_pip = socket.args.use_interactive_pip;
      if (socket.transport !== TransportTypes.POST_MESSAGE) {
        let tmp16 = importDefault(10496);
        let obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        const prototype2 = tmp16.prototype;
        tmp16 = new tmp16(obj, "command not available from \"" + socket.transport + " transport");
        throw tmp16;
      } else if (null == socket.application.id) {
        let tmp7 = importDefault(10496);
        obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const prototype = tmp7.prototype;
        tmp7 = new tmp7(obj, "invalid application");
        throw tmp7;
      } else {
        obj = importDefault(686);
        const obj1 = { type: "EMBEDDED_ACTIVITY_SET_CONFIG", applicationId: socket.application.id };
        const obj2 = { useInteractivePIP: use_interactive_pip };
        obj1.config = obj2;
        obj.dispatch(obj1);
        const obj3 = { use_interactive_pip };
        return Promise.resolve(obj3);
      }
    }
  }
};
