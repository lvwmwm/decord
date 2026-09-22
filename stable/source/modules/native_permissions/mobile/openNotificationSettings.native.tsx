// Module ID: 9820
// Function ID: 9821
// Name: openNotificationSettings
// Dependencies: [5229, 2]
// Exports: default

// Module 9820 (openNotificationSettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5229 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  const result = NativeDeviceSettingsModuleDefault.openNotificationSettings();
};
