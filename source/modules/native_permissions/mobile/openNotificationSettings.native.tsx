// Module ID: 10634
// Function ID: 82922
// Name: openNotificationSettings
// Dependencies: [27, 477, 4685, 2]
// Exports: default

// Module 10634 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4685).openNotificationSettings();
    const obj2 = importDefault(4685);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
