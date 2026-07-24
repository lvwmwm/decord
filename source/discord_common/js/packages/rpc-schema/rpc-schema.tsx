// Module ID: 13456
// Function ID: 103399
// Name: createRPCCommand
// Dependencies: [13457, 13458, 2]
// Exports: createRPCCommand

// Module 13456 (createRPCCommand)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  request = undefined;
  let dependencyMap;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp2 = request(13457).RPCCommandSchemas[AUTHENTICATE];
  if (null != tmp2) {
    request = tmp2.request;
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
