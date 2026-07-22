// Module ID: 13289
// Function ID: 100916
// Name: createRPCCommand
// Dependencies: [0, 0, 0]
// Exports: createRPCCommand

// Module 13289 (createRPCCommand)
const result = require("__exportStarResult1").fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  let require;
  let closure_1;
  const obj = { scope: scope.scope, handler: scope.handler };
  const tmp2 = require(closure_1[0]).RPCCommandSchemas[AUTHENTICATE];
  if (null != tmp2) {
    request = tmp2.request;
  }
  require = request;
  closure_1 = null;
  if (null != request) {
    obj.validation = (object) => {
      if (null == closure_1) {
        closure_1 = request(closure_1[1]).joiReqObj(object.object(request(object)));
        const obj = request(closure_1[1]);
      }
      return closure_1;
    };
  }
  return obj;
};
