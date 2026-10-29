// Module ID: 16218
// Function ID: 16219
// Name: helpers
// Dependencies: [1095, 2]
// Exports: joiReqObj

// Module 16218 (helpers)
import Constants from "Constants" /* 1095 */;
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
