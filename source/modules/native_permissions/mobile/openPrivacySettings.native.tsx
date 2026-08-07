// Module ID: 4867
// Function ID: 4868
// Name: openPrivacySettings
// Dependencies: [17, 500, 4868, 2]
// Exports: default

// Module 4867 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4868).openPrivacySettings();
    const obj2 = importDefault(4868);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
