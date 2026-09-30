// Module ID: 8948
// Function ID: 8949
// Name: openNotificationSettings
// Dependencies: [5657, 2]
// Exports: default

// Module 8948 (openNotificationSettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5657 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  const result = NativeDeviceSettingsModuleDefault.openNotificationSettings();
};
