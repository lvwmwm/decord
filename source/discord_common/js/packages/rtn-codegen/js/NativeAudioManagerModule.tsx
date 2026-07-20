// Module ID: 8829
// Function ID: 69649
// Name: enforcing
// Dependencies: []
// Exports: getInvalidAndroidDevice

// Module 8829 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const obj = { SPEAKERPHONE: "SPEAKERPHONE", WIRED_HEADSET: "WIRED_HEADSET", EARPIECE: "EARPIECE", BLUETOOTH_HEADSET: "BLUETOOTH_HEADSET", INVALID: "INVALID" };
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx");

export default enforcing;
export const AudioDeviceType = obj;
export const getInvalidAndroidDevice = function getInvalidAndroidDevice() {
  const obj = { <string:1230757654>: null, <string:2489072230>: null, <string:1664854612>: null, <string:1375441979>: null };
  obj.simpleDeviceType = obj.INVALID;
  return obj;
};
