// Module ID: 1900
// Function ID: 21336
// Name: enforcing
// Dependencies: []

// Module 1900 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppDatabaseModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx");

export default enforcing;
