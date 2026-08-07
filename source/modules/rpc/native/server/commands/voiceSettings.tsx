// Module ID: 13710
// Function ID: 13711
// Name: items
// Dependencies: [4205, 676, 8842, 10674, 2]

// Module 13710 (items)
let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler() {
  return require(10674) /* validateSocketClient */.getDeprecatedVoiceSettings();
};
obj[require("ME").RPCCommands.GET_VOICE_SETTINGS] = obj;
const result = require("set").fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
