// Module ID: 10490
// Function ID: 81881
// Name: validateSocketClient
// Dependencies: []
// Exports: getDeprecatedVoiceSettings, getVoiceSettings

// Module 10490 (validateSocketClient)
let closure_3 = importDefault(dependencyMap[0]);
const TransportTypes = arg1(dependencyMap[1]).TransportTypes;
const RPCCloseCodes = arg1(dependencyMap[2]).RPCCloseCodes;
const tmp2 = () => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/rpc/native/server/NativeRPCHelpers.tsx");

export const validateSocketClient = tmp2;
export const getDeprecatedVoiceSettings = () => arg1(dependencyMap[3]).getDeprecatedVoiceSettingsWithShortcut(() => []);
export const getVoiceSettings = (closure_0) => arg1(dependencyMap[3]).getVoiceSettingsWithShortcut(closure_0, () => "");
