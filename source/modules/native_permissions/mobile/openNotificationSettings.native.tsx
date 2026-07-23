// Module ID: 10640
// Function ID: 83038
// Name: openNotificationSettings
// Dependencies: [27, 477, 4684, 2]
// Exports: default

// Module 10640 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4684).openNotificationSettings();
    const obj2 = importDefault(4684);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
