// Module ID: 10501
// Function ID: 82017
// Name: enforcing
// Dependencies: []

// Module 10501 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceThermalStateModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceThermalStateModule.tsx");

export default enforcing;
