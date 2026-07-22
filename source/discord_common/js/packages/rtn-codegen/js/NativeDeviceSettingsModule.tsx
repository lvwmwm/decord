// Module ID: 4681
// Function ID: 40800
// Name: enforcing
// Dependencies: []

// Module 4681 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceSettingsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx");

export default enforcing;
