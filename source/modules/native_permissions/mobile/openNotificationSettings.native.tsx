// Module ID: 10709
// Function ID: 10710
// Name: openNotificationSettings
// Dependencies: [17, 500, 4868, 2]
// Exports: default

// Module 10709 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4868).openNotificationSettings();
    const obj2 = importDefault(4868);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
