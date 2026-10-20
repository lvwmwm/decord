// Module ID: 15579
// Function ID: 15580
// Name: voiceSettings
// Dependencies: [6332, 1087, 8747, 11351, 2]

// Module 15579 (voiceSettings)
import Constants from "Constants" /* 1087 */;
import Constants2 from "Constants" /* 6332 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8747 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 11351 */;
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
