// Module ID: 15983
// Function ID: 122662
// Name: enforcing
// Dependencies: []

// Module 15983 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeOnDemandResourceModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeOnDemandResourceModule.tsx");

export default enforcing;
