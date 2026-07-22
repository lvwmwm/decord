// Module ID: 13299
// Function ID: 100993
// Dependencies: []

// Module 13299
const _module = require(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult(_module.RPC_APPLICATION_LOGGING_CATEGORY);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default {
  [_module.RPCCommands.CAPTURE_LOG]: {
    validation(string) {
      let obj = importDefault(dependencyMap[2])(string);
      obj = {};
      const requiredResult = obj.required();
      const stringResult = string.string();
      obj.level = string.string().max(10).required();
      const maxResult = string.string().max(10);
      const stringResult1 = string.string();
      obj.message = string.string().max(1000).required();
      return requiredResult.keys(obj);
    },
    handler(arg0) {
      let args;
      let socket;
      ({ socket, args } = arg0);
      const level = args.level;
      const result = require(dependencyMap[3]).validatePostMessageTransport(socket.transport);
      const combined = "" + socket.application.id + " - " + args.message;
      if ("log" === level) {
        importDefaultResult.log(combined);
      } else if ("warn" === level) {
        importDefaultResult.warn(combined);
      } else if ("debug" === level) {
        importDefaultResult.verbose(combined);
      } else if ("info" === level) {
        importDefaultResult.info(combined);
      } else if ("error" === level) {
        importDefaultResult.error(combined);
      }
    }
  }
};
