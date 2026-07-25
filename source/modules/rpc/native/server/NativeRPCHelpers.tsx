// Module ID: 10557
// Function ID: 82252
// Name: validateSocketClient
// Dependencies: [5, 4034, 653, 10558, 10553, 2]
// Exports: getDeprecatedVoiceSettings, getVoiceSettings

// Module 10557 (validateSocketClient)
import set from "set";
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCCloseCodes } from "ME";

const require = arg1;
const tmp2 = (() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
})();
const result = require("ME").fileFinishedImporting("modules/rpc/native/server/NativeRPCHelpers.tsx");

export const validateSocketClient = tmp2;
export const getDeprecatedVoiceSettings = () => require(10558) /* recurseReplaceContentTree */.getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (guildId) => require(10558) /* recurseReplaceContentTree */.getVoiceSettingsWithShortcut(guildId, () => "");
