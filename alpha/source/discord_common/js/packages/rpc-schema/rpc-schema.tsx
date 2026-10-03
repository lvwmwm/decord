// Module ID: 14315
// Function ID: 14316
// Name: CONTEXT_MENU_ICON_NAMES
// Dependencies: [14316, 14317, 2, 14318]
// Exports: createRPCCommand

// Module 14315 (CONTEXT_MENU_ICON_NAMES)
import helpers from "helpers" /* 14317 */;
import contextMenuIcons from "contextMenuIcons" /* 14318 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap;

const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = contextMenuIcons.CONTEXT_MENU_ICON_NAMES;
export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = request(14316).RPCCommandSchemas[AUTHENTICATE];
  request = undefined;
  if (tmp != null) {
    request = tmp.request;
  }
  dependencyMap = null;
  if (null != request) {
    obj.validation = (object) => {
      if (null == closure_1) {
        const obj = helpers;
        closure_1 = obj.joiReqObj(object.object(request(object)));
      }
      return closure_1;
    };
  }
  return obj;
};
