// Module ID: 13814
// Function ID: 13815
// Name: createRPCCommand
// Dependencies: [13815, 13816, 2]
// Exports: createRPCCommand

// Module 13814 (createRPCCommand)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  let dependencyMap;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = request(13815).RPCCommandSchemas[AUTHENTICATE];
  request = undefined;
  if (tmp != null) {
    request = tmp.request;
  }
  dependencyMap = null;
  if (null != request) {
    obj.validation = (object) => {
      if (null == closure_1) {
        closure_1 = request(_null[1]).joiReqObj(object.object(request(object)));
        const obj = request(_null[1]);
      }
      return closure_1;
    };
  }
  return obj;
};
