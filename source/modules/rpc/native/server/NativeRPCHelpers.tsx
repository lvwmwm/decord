// Module ID: 10529
// Function ID: 82123
// Name: validateSocketClient
// Dependencies: [5, 4033, 653, 10530, 10525, 2]
// Exports: getDeprecatedVoiceSettings, getVoiceSettings

// Module 10529 (validateSocketClient)
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
export const getDeprecatedVoiceSettings = () => require(10530) /* recurseReplaceContentTree */.getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (guildId) => require(10530) /* recurseReplaceContentTree */.getVoiceSettingsWithShortcut(guildId, () => "");
