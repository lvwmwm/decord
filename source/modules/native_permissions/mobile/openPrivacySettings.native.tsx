// Module ID: 4848
// Function ID: 4849
// Name: openPrivacySettings
// Dependencies: [17, 500, 4849, 2]
// Exports: default

// Module 4848 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4849).openPrivacySettings();
    const obj2 = importDefault(4849);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
