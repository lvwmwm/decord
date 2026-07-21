// Module ID: 8833
// Function ID: 69661
// Name: enforcing
// Dependencies: []
// Exports: getInvalidAndroidDevice

// Module 8833 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const obj = { SPEAKERPHONE: "SPEAKERPHONE", WIRED_HEADSET: "WIRED_HEADSET", EARPIECE: "EARPIECE", BLUETOOTH_HEADSET: "BLUETOOTH_HEADSET", INVALID: "INVALID" };
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx");

export default enforcing;
export const AudioDeviceType = obj;
export const getInvalidAndroidDevice = function getInvalidAndroidDevice() {
  const obj = { "Null": null, "Null": null, "Null": null, "Null": null };
  obj.simpleDeviceType = obj.INVALID;
  return obj;
};
