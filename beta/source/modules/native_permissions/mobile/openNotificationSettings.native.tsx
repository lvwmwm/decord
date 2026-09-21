// Module ID: 9560
// Function ID: 9561
// Name: openNotificationSettings
// Dependencies: [5364, 2]
// Exports: default

// Module 9560 (openNotificationSettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5364 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  const result = NativeDeviceSettingsModuleDefault.openNotificationSettings();
};
