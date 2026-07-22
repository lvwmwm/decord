// Module ID: 15995
// Function ID: 122748
// Name: enforcing
// Dependencies: []

// Module 15995 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeOnDemandResourceModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeOnDemandResourceModule.tsx");

export default enforcing;
