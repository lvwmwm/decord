// Module ID: 9566
// Function ID: 9567
// Name: openNotificationSettings
// Dependencies: [5366, 2]
// Exports: default

// Module 9566 (openNotificationSettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5366 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  const result = NativeDeviceSettingsModuleDefault.openNotificationSettings();
};
