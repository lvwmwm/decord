// Module ID: 13477
// Function ID: 103603
// Dependencies: [653, 3, 10556, 10558, 2]

// Module 13477
import ME from "ME";
import importDefaultResult from "recurseReplaceContentTree";

importDefaultResult = new importDefaultResult(ME.RPC_APPLICATION_LOGGING_CATEGORY);
let result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default {
  [ME.RPCCommands.CAPTURE_LOG]: {
    validation(string) {
      let obj = importDefault(10556)(string);
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
      const result = require(10558) /* recurseReplaceContentTree */.validatePostMessageTransport(socket.transport);
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
