// Module ID: 13319
// Function ID: 101186
// Name: items
// Dependencies: []

// Module 13319 (items)
let obj = {};
obj = {};
obj = {};
const items = [require(dependencyMap[2]).OAuth2Scopes.RPC, require(dependencyMap[2]).OAuth2Scopes.RPC_VOICE_READ];
obj[require(dependencyMap[0]).RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler() {
  return require(dependencyMap[3]).getDeprecatedVoiceSettings();
};
obj[require(dependencyMap[1]).RPCCommands.GET_VOICE_SETTINGS] = obj;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
