// Module ID: 15560
// Function ID: 15561
// Name: discord_common/helpers
// Dependencies: [1082, 2]
// Exports: joiReqObj

// Module 15560 (discord_common/helpers)
import Constants from "Constants" /* 1082 */;
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
