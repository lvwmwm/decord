// Module ID: 5656
// Function ID: 5657
// Name: openPrivacySettings
// Dependencies: [5657, 2]
// Exports: default

// Module 5656 (openPrivacySettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  NativeDeviceSettingsModuleDefault.openPrivacySettings();
};
