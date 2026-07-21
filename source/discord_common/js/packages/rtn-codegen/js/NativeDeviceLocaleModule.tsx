// Module ID: 643
// Function ID: 7357
// Name: keys1
// Dependencies: []

// Module 643 (keys1)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceLocaleModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx");

export default enforcing;
