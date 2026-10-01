// Module ID: 14038
// Function ID: 14039
// Name: CONTEXT_MENU_ICON_NAMES
// Dependencies: [14039, 14040, 2, 14041]
// Exports: createRPCCommand

// Module 14038 (CONTEXT_MENU_ICON_NAMES)
import helpers from "helpers" /* 14040 */;
import contextMenuIcons from "contextMenuIcons" /* 14041 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap;

const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = contextMenuIcons.CONTEXT_MENU_ICON_NAMES;
export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = request(14039).RPCCommandSchemas[AUTHENTICATE];
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
