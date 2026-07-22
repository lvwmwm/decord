// Module ID: 8327
// Function ID: 66017
// Name: enforcing
// Dependencies: []

// Module 8327 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeShareManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");

export default enforcing;
