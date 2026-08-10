// Module ID: 10776
// Function ID: 10777
// Name: openNotificationSettings
// Dependencies: [17, 500, 4870, 2]
// Exports: default

// Module 10776 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4870).openNotificationSettings();
    const obj2 = importDefault(4870);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
