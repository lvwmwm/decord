// Module ID: 8321
// Function ID: 65980
// Name: enforcing
// Dependencies: []

// Module 8321 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeShareManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");

export default enforcing;
