// Module ID: 13291
// Function ID: 100943
// Name: RPCCommands
// Dependencies: []
// Exports: joiEnum, joiReqObj

// Module 13291 (RPCCommands)
let RPCCommands;
let RPCEvents;
const _module = require(dependencyMap[0]);
({ RPCCommands, RPCEvents } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("../discord_common/js/packages/rpc-schema/helpers.tsx");

export const RPCCommand = RPCCommands;
export const RPCEvent = RPCEvents;
export const joiReqObj = function joiReqObj(required) {
  return required.required().unknown(true);
};
export const joiEnum = function joiEnum(OAuth2Scopes) {
  return Object.values(OAuth2Scopes);
};
