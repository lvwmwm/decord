// Module ID: 16258
// Function ID: 16259
// Name: helpers
// Dependencies: [1083, 2]
// Exports: joiReqObj

// Module 16258 (helpers)
import Constants from "Constants" /* 1083 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPCEvents;
({ RPCCommands, RPCEvents } = Constants);
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export function joiReqObj(required) {
  const requiredResult = required.required();
  return requiredResult.unknown(true);
}
