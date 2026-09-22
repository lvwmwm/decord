// Module ID: 5228
// Function ID: 5229
// Name: openPrivacySettings
// Dependencies: [5229, 2]
// Exports: default

// Module 5228 (openPrivacySettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5229 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  NativeDeviceSettingsModuleDefault.openPrivacySettings();
};
