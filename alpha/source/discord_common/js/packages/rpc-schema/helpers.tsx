// Module ID: 15624
// Function ID: 15625
// Name: helpers
// Dependencies: [1098, 2]
// Exports: joiReqObj

// Module 15624 (helpers)
import Constants from "Constants" /* 1098 */;
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
