// Module ID: 5056
// Function ID: 5057
// Name: openPrivacySettings
// Dependencies: [17, 500, 5057, 2]
// Exports: default

// Module 5056 (openPrivacySettings)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 5057 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    enforcingDefault.openPrivacySettings();
    const obj2 = enforcingDefault;
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
