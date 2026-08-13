// Module ID: 4910
// Function ID: 4911
// Name: openPrivacySettings
// Dependencies: [17, 500, 4911, 2]
// Exports: default

// Module 4910 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4911).openPrivacySettings();
    const obj2 = importDefault(4911);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
