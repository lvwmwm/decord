// Module ID: 10692
// Function ID: 10693
// Name: openNotificationSettings
// Dependencies: [17, 500, 4741, 2]
// Exports: default

// Module 10692 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4741).openNotificationSettings();
    const obj2 = importDefault(4741);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
