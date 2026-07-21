// Module ID: 1247
// Function ID: 14057
// Name: enforcing
// Dependencies: []

// Module 1247 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeFileModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx");

export default enforcing;
