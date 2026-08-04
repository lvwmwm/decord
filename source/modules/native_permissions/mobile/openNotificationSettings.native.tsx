// Module ID: 10670
// Function ID: 10671
// Name: openNotificationSettings
// Dependencies: [17, 500, 4836, 2]
// Exports: default

// Module 10670 (openNotificationSettings)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(4836).openNotificationSettings();
    const obj2 = importDefault(4836);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
