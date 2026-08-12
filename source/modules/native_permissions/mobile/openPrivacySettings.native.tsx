// Module ID: 4909
// Function ID: 4910
// Name: openPrivacySettings
// Dependencies: [17, 500, 4910, 2]
// Exports: default

// Module 4909 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4910).openPrivacySettings();
    const obj2 = importDefault(4910);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
