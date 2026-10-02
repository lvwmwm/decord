// Module ID: 14080
// Function ID: 14081
// Name: voiceSettings
// Dependencies: [4741, 1086, 7791, 8769, 2]

// Module 14080 (voiceSettings)
import Constants from "Constants" /* 1086 */;
import Constants2 from "Constants" /* 4741 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7791 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 8769 */;
import size from "module_2" /* 2 */;

let obj3;
const RPC_SCOPE_CONFIG = Constants2.RPC_SCOPE_CONFIG;
let obj = {};
const obj2 = {
  scope: obj3,
  handler() {
    const obj = NativeRPCHelpers;
    return obj.getDeprecatedVoiceSettings();
  }
};
obj3 = {};
const GET_VOICE_SETTINGS = Constants.RPCCommands.GET_VOICE_SETTINGS;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj3[ANY] = items;
obj[GET_VOICE_SETTINGS] = obj2;
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
