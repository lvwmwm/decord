// Module ID: 4740
// Function ID: 4741
// Name: openPrivacySettings
// Dependencies: [17, 500, 4741, 2]
// Exports: default

// Module 4740 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4741).openPrivacySettings();
    const obj2 = importDefault(4741);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
