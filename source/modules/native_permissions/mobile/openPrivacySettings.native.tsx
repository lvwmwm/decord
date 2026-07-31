// Module ID: 4744
// Function ID: 4745
// Name: openPrivacySettings
// Dependencies: [17, 500, 4745, 2]
// Exports: default

// Module 4744 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4745).openPrivacySettings();
    const obj2 = importDefault(4745);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
