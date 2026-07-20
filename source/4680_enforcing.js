// Module ID: 4680
// Function ID: 40743
// Name: enforcing
// Dependencies: []

// Module 4680 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceSettingsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx");

export default enforcing;
