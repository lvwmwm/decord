// Module ID: 4806
// Function ID: 4807
// Name: openPrivacySettings
// Dependencies: [17, 500, 4807, 2]
// Exports: default

// Module 4806 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4807).openPrivacySettings();
    const obj2 = importDefault(4807);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
