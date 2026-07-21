// Module ID: 4682
// Function ID: 40784
// Name: enforcing
// Dependencies: []

// Module 4682 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceSettingsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx");

export default enforcing;
