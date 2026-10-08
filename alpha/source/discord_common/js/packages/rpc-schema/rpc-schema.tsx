// Module ID: 14560
// Function ID: 14561
// Name: CONTEXT_MENU_ICON_NAMES
// Dependencies: [14561, 14562, 2, 14563]
// Exports: createRPCCommand

// Module 14560 (CONTEXT_MENU_ICON_NAMES)
import helpers from "helpers" /* 14562 */;
import contextMenuIcons from "contextMenuIcons" /* 14563 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap;

const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = contextMenuIcons.CONTEXT_MENU_ICON_NAMES;
export const createRPCCommand = function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = request(14561).RPCCommandSchemas[AUTHENTICATE];
  request = undefined;
  if (tmp != null) {
    request = tmp.request;
  }
  dependencyMap = null;
  if (null != request) {
    obj.validation = function validation(object) {
      if (null == closure_1) {
        const obj = helpers;
        closure_1 = obj.joiReqObj(object.object(request(object)));
      }
      return closure_1;
    };
  }
  return obj;
};
