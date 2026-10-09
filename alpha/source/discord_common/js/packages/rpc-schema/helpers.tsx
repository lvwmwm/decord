// Module ID: 14661
// Function ID: 14662
// Name: helpers
// Dependencies: [1096, 2]
// Exports: joiEnum, joiReqObj

// Module 14661 (helpers)
import Constants from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPCEvents;
({ RPCCommands, RPCEvents } = Constants);
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export const joiReqObj = function joiReqObj(required) {
  const requiredResult = required.required();
  return requiredResult.unknown(true);
};
export const joiEnum = function joiEnum(ActivityPlatform) {
  return Object.values(ActivityPlatform);
};
