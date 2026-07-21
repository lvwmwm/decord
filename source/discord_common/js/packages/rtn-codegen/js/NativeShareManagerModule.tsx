// Module ID: 8325
// Function ID: 65992
// Name: enforcing
// Dependencies: []

// Module 8325 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeShareManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");

export default enforcing;
