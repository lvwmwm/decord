// Module ID: 9801
// Function ID: 9802
// Name: enforcing
// Dependencies: [17, 2]
// Exports: getInvalidAndroidDevice

// Module 9801 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
let obj = { SPEAKERPHONE: "SPEAKERPHONE", WIRED_HEADSET: "WIRED_HEADSET", EARPIECE: "EARPIECE", BLUETOOTH_HEADSET: "BLUETOOTH_HEADSET", INVALID: "INVALID" };
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioManagerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx");

export default enforcing;
export const AudioDeviceType = obj;
export const getInvalidAndroidDevice = function getInvalidAndroidDevice() {
  obj = { deviceType: 0, simpleDeviceType: obj.INVALID, deviceId: -1, deviceName: "Invalid" };
  return obj;
};
