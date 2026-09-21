// Module ID: 5363
// Function ID: 5364
// Name: openPrivacySettings
// Dependencies: [5364, 2]
// Exports: default

// Module 5363 (openPrivacySettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5364 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  NativeDeviceSettingsModuleDefault.openPrivacySettings();
};
