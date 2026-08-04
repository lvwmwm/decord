// Module ID: 13653
// Function ID: 13654
// Name: RPCCommands
// Dependencies: [505, 2]
// Exports: joiEnum, joiReqObj

// Module 13653 (RPCCommands)
import sum from "sum";

let RPCCommands;
let RPCEvents;
({ RPCCommands, RPCEvents } = sum);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export const joiReqObj = function joiReqObj(required) {
  return required.required().unknown(true);
};
export const joiEnum = function joiEnum(OAuth2Scopes) {
  return Object.values(OAuth2Scopes);
};
