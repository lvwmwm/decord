// Module ID: 8880
// Function ID: 69940
// Name: enforcing
// Dependencies: [27, 2]
// Exports: getInvalidAndroidDevice

// Module 8880 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

let obj = { SPEAKERPHONE: "SPEAKERPHONE", WIRED_HEADSET: "WIRED_HEADSET", EARPIECE: "EARPIECE", BLUETOOTH_HEADSET: "BLUETOOTH_HEADSET", INVALID: "INVALID" };
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioManagerModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx");

export default enforcing;
export const AudioDeviceType = obj;
export const getInvalidAndroidDevice = function getInvalidAndroidDevice() {
  const obj = { deviceType: 0, simpleDeviceType: null, deviceId: -1, deviceName: "Invalid" };
  obj.simpleDeviceType = obj.INVALID;
  return obj;
};
