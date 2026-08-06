// Module ID: 4850
// Function ID: 4851
// Name: openPrivacySettings
// Dependencies: [17, 500, 4851, 2]
// Exports: default

// Module 4850 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4851).openPrivacySettings();
    const obj2 = importDefault(4851);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
