// Module ID: 6909
// Function ID: 55020
// Name: enforcing
// Dependencies: []

// Module 6909 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTTIModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTTIModule.tsx");

export default enforcing;
