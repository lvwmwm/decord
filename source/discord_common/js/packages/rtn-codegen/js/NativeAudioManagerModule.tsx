// Module ID: 9076
// Function ID: 9077
// Name: enforcing
// Dependencies: [17, 2]
// Exports: getInvalidAndroidDevice

// Module 9076 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

let obj = { SPEAKERPHONE: "SPEAKERPHONE", WIRED_HEADSET: "WIRED_HEADSET", EARPIECE: "EARPIECE", BLUETOOTH_HEADSET: "BLUETOOTH_HEADSET", INVALID: "INVALID" };
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioManagerModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx");

export default enforcing;
export const AudioDeviceType = obj;
export const getInvalidAndroidDevice = function getInvalidAndroidDevice() {
  obj = { deviceType: 0, simpleDeviceType: obj.INVALID, deviceId: -1, deviceName: "Invalid" };
  return obj;
};
