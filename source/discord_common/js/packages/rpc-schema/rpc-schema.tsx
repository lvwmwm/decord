// Module ID: 14401
// Function ID: 14402
// Name: CONTEXT_MENU_ICON_NAMES
// Dependencies: [14402, 14403, 2, 14404]
// Exports: createRPCCommand

// Module 14401 (CONTEXT_MENU_ICON_NAMES)
import set from "set" /* 2 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14404 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES.CONTEXT_MENU_ICON_NAMES;
export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = request(14402).RPCCommandSchemas[AUTHENTICATE];
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
