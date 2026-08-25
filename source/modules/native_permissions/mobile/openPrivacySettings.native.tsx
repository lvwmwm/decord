// Module ID: 4972
// Function ID: 4973
// Name: openPrivacySettings
// Dependencies: [17, 500, 4973, 2]
// Exports: default

// Module 4972 (openPrivacySettings)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 4973 */;

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
