// Module ID: 15481
// Function ID: 15482
// Name: voiceSettings
// Dependencies: [5858, 1087, 8685, 11255, 2]

// Module 15481 (voiceSettings)
import Constants from "Constants" /* 1087 */;
import Constants2 from "Constants" /* 5858 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8685 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 11255 */;
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
