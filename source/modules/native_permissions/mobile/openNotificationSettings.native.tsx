// Module ID: 11581
// Function ID: 11582
// Name: openNotificationSettings
// Dependencies: [17, 500, 4849, 2]
// Exports: default

// Module 11581 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4849).openNotificationSettings();
    const obj2 = importDefault(4849);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
