// Module ID: 10623
// Function ID: 82941
// Name: openNotificationSettings
// Dependencies: []
// Exports: default

// Module 10623 (openNotificationSettings)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = importDefault(dependencyMap[2]).openNotificationSettings();
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
