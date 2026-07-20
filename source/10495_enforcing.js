// Module ID: 10495
// Function ID: 81994
// Name: enforcing
// Dependencies: []

// Module 10495 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceThermalStateModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceThermalStateModule.tsx");

export default enforcing;
