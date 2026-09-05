// Module ID: 14516
// Function ID: 14517
// Name: items
// Dependencies: [4465, 1074, 8339, 9558, 2]

// Module 14516 (items)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4465 */;
import set2 from "set" /* 8339 */;
import validateSocketClient from "validateSocketClient" /* 9558 */;

let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [set2.OAuth2Scopes.RPC, set2.OAuth2Scopes.RPC_VOICE_READ];
obj[RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler() {
  return validateSocketClient.getDeprecatedVoiceSettings();
};
obj[ME.RPCCommands.GET_VOICE_SETTINGS] = obj;
const result = set.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
