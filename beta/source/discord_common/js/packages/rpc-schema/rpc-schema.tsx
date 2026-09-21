// Module ID: 14760
// Function ID: 14761
// Name: CONTEXT_MENU_ICON_NAMES
// Dependencies: [14761, 14762, 2, 14763]
// Exports: createRPCCommand

// Module 14760 (CONTEXT_MENU_ICON_NAMES)
import helpers from "helpers" /* 14762 */;
import contextMenuIcons from "contextMenuIcons" /* 14763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = contextMenuIcons.CONTEXT_MENU_ICON_NAMES;
export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = request(14761).RPCCommandSchemas[AUTHENTICATE];
  request = undefined;
  if (tmp != null) {
    request = tmp.request;
  }
  dependencyMap = null;
  if (null != request) {
    obj.validation = (object) => {
      if (null == closure_1) {
        closure_1 = helpers.joiReqObj(object.object(request(object)));
      }
      return closure_1;
    };
  }
  return obj;
};
