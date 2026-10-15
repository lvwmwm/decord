// Module ID: 15435
// Function ID: 15436
// Name: voiceSettings
// Dependencies: [5855, 1085, 8676, 11242, 2]

// Module 15435 (voiceSettings)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 5855 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8676 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 11242 */;
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
