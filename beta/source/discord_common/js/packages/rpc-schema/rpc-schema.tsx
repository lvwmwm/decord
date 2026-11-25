// Module ID: 15688
// Function ID: 15689
// Name: CONTEXT_MENU_ICON_NAMES
// Dependencies: [15689, 15691, 2, 15692]
// Exports: createRPCCommand, createRPCEvent

// Module 15688 (CONTEXT_MENU_ICON_NAMES)
import discord_common_helpers from "discord_common/helpers" /* 15691 */;
import contextMenuIcons from "contextMenuIcons" /* 15692 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap;

const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/rpc-schema.tsx");

export const CONTEXT_MENU_ICON_NAMES = contextMenuIcons.CONTEXT_MENU_ICON_NAMES;
export function createRPCCommand(AUTHENTICATE, scope) {
  let request;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, validateAccess: scope.validateAccess, handler: scope.handler };
  const tmp = request(15689).RPCCommandSchemas[AUTHENTICATE];
  request = undefined;
  if (tmp != null) {
    request = tmp.request;
  }
  dependencyMap = null;
  if (null != request) {
    obj.validation = function validation(object) {
      if (null == closure_1) {
        const obj = discord_common_helpers;
        closure_1 = obj.joiReqObj(object.object(request(object)));
      }
      return closure_1;
    };
  }
  return obj;
}
export function createRPCEvent(ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, scope) {
  let subscribeArgs;
  dependencyMap = undefined;
  let obj = { scope: scope.scope, handler: scope.handler };
  const tmp = subscribeArgs(15689).RPCEventSchemas[ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE];
  subscribeArgs = undefined;
  if (tmp != null) {
    subscribeArgs = tmp.subscribeArgs;
  }
  dependencyMap = null;
  if (null != subscribeArgs) {
    obj.validation = function validation(object) {
      if (null == closure_1) {
        const obj = discord_common_helpers;
        closure_1 = obj.joiReqObj(object.object(subscribeArgs(object)));
      }
      return closure_1;
    };
  }
  return obj;
}
