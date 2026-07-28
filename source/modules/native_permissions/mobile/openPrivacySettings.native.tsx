// Module ID: 4718
// Function ID: 40948
// Name: openPrivacySettings
// Dependencies: [27, 477, 4719, 2]
// Exports: default

// Module 4718 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4719).openPrivacySettings();
    const obj2 = importDefault(4719);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
