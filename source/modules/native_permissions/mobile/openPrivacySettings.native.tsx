// Module ID: 4683
// Function ID: 40816
// Name: openPrivacySettings
// Dependencies: [27, 477, 4684, 2]
// Exports: default

// Module 4683 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4684).openPrivacySettings();
    const obj2 = importDefault(4684);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
