// Module ID: 4835
// Function ID: 4836
// Name: openPrivacySettings
// Dependencies: [17, 500, 4836, 2]
// Exports: default

// Module 4835 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4836).openPrivacySettings();
    const obj2 = importDefault(4836);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
