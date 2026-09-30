// Module ID: 14279
// Function ID: 14280
// Name: voiceSettings
// Dependencies: [4769, 1074, 7982, 8973, 2]

// Module 14279 (voiceSettings)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 4769 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7982 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 8973 */;
import size from "module_2" /* 2 */;

const obj = {};
const obj2 = { scope: null, handler: null };
const obj3 = {};
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj3[Constants2.RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.handler = function handler() {
  return NativeRPCHelpers.getDeprecatedVoiceSettings();
};
obj[Constants.RPCCommands.GET_VOICE_SETTINGS] = obj2;
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
