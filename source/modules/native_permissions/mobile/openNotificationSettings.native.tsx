// Module ID: 9660
// Function ID: 9661
// Name: openNotificationSettings
// Dependencies: [17, 500, 5092, 2]
// Exports: default

// Module 9660 (openNotificationSettings)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 5092 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = set.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = enforcingDefault.openNotificationSettings();
    const obj2 = enforcingDefault;
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
