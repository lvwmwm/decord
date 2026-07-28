// Module ID: 10672
// Function ID: 83043
// Name: openNotificationSettings
// Dependencies: [27, 477, 4719, 2]
// Exports: default

// Module 10672 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4719).openNotificationSettings();
    const obj2 = importDefault(4719);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
