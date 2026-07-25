// Module ID: 4684
// Function ID: 40832
// Name: openPrivacySettings
// Dependencies: [27, 477, 4685, 2]
// Exports: default

// Module 4684 (openPrivacySettings)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(4685).openPrivacySettings();
    const obj2 = importDefault(4685);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
