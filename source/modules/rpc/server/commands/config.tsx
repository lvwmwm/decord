// Module ID: 13269
// Function ID: 100817
// Dependencies: []

// Module 13269
const _module = require(dependencyMap[0]);
const TransportTypes = _module.TransportTypes;
const _module1 = require(dependencyMap[1]);
const RPCErrors = _module1.RPCErrors;
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default {
  [_module1.RPCCommands.SET_CONFIG]: {
    scope: _module.RPC_AUTHENTICATED_SCOPE,
    validation(boolean) {
      let obj = importDefault(dependencyMap[2])(boolean);
      obj = { use_interactive_pip: boolean.boolean() };
      return obj.required().keys(obj);
    },
    handler(socket) {
      socket = socket.socket;
      const use_interactive_pip = socket.args.use_interactive_pip;
      if (socket.transport !== TransportTypes.POST_MESSAGE) {
        let tmp16 = importDefault(dependencyMap[3]);
        let obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        const prototype2 = tmp16.prototype;
        tmp16 = new tmp16(obj, "command not available from \"" + socket.transport + " transport");
        throw tmp16;
      } else if (null == socket.application.id) {
        let tmp7 = importDefault(dependencyMap[3]);
        obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const prototype = tmp7.prototype;
        tmp7 = new tmp7(obj, "invalid application");
        throw tmp7;
      } else {
        obj = importDefault(dependencyMap[4]);
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
