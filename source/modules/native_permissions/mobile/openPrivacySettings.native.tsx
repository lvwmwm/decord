// Module ID: 4869
// Function ID: 4870
// Name: openPrivacySettings
// Dependencies: [17, 500, 4870, 2]
// Exports: default

// Module 4869 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4870).openPrivacySettings();
    const obj2 = importDefault(4870);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
