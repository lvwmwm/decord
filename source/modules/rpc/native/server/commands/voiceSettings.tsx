// Module ID: 13549
// Function ID: 104007
// Name: items
// Dependencies: [4068, 653, 8150, 10596, 2]

// Module 13549 (items)
let obj = {};
obj = {};
obj = {};
const items = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler() {
  return require(10596) /* validateSocketClient */.getDeprecatedVoiceSettings();
};
obj[require("ME").RPCCommands.GET_VOICE_SETTINGS] = obj;
const result = require("set").fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
