// Module ID: 10818
// Function ID: 10819
// Name: openNotificationSettings
// Dependencies: [17, 500, 4807, 2]
// Exports: default

// Module 10818 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4807).openNotificationSettings();
    const obj2 = importDefault(4807);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
