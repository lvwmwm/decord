// Module ID: 13405
// Function ID: 103099
// Name: RPCCommands
// Dependencies: [482, 2]
// Exports: joiEnum, joiReqObj

// Module 13405 (RPCCommands)
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
