// Module ID: 15963
// Function ID: 122436
// Name: enforcing
// Dependencies: []

// Module 15963 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJankStatsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx");

export default enforcing;
