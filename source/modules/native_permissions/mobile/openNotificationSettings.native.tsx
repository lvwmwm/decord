// Module ID: 10834
// Function ID: 10835
// Name: openNotificationSettings
// Dependencies: [17, 500, 4910, 2]
// Exports: default

// Module 10834 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4910).openNotificationSettings();
    const obj2 = importDefault(4910);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
