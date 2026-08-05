// Module ID: 4820
// Function ID: 4821
// Name: openPrivacySettings
// Dependencies: [17, 500, 4821, 2]
// Exports: default

// Module 4820 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4821).openPrivacySettings();
    const obj2 = importDefault(4821);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
