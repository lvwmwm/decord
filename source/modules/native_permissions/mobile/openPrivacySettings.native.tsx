// Module ID: 4680
// Function ID: 40798
// Name: openPrivacySettings
// Dependencies: []
// Exports: default

// Module 4680 (openPrivacySettings)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    importDefault(dependencyMap[2]).openPrivacySettings();
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
