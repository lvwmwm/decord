// Module ID: 10750
// Function ID: 10751
// Name: openNotificationSettings
// Dependencies: [17, 500, 4911, 2]
// Exports: default

// Module 10750 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4911).openNotificationSettings();
    const obj2 = importDefault(4911);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
