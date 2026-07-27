// Module ID: 10558
// Function ID: 82257
// Name: validateSocketClient
// Dependencies: [5, 4034, 653, 10559, 10554, 2]
// Exports: getDeprecatedVoiceSettings, getVoiceSettings

// Module 10558 (validateSocketClient)
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
export const getDeprecatedVoiceSettings = () => require(10559) /* recurseReplaceContentTree */.getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (guildId) => require(10559) /* recurseReplaceContentTree */.getVoiceSettingsWithShortcut(guildId, () => "");
