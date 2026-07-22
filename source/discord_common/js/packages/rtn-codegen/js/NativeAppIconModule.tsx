// Module ID: 12267
// Function ID: 94074
// Name: enforcing
// Dependencies: []

// Module 12267 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppIconModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppIconModule.tsx");

export default enforcing;
