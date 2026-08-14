// Module ID: 4932
// Function ID: 4933
// Name: openPrivacySettings
// Dependencies: [17, 500, 4933, 2]
// Exports: default

// Module 4932 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4933).openPrivacySettings();
    const obj2 = importDefault(4933);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
