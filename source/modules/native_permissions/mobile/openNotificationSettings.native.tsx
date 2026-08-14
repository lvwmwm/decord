// Module ID: 10766
// Function ID: 10767
// Name: openNotificationSettings
// Dependencies: [17, 500, 4933, 2]
// Exports: default

// Module 10766 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4933).openNotificationSettings();
    const obj2 = importDefault(4933);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
