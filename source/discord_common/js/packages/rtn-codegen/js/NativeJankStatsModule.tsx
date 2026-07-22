// Module ID: 15975
// Function ID: 122522
// Name: enforcing
// Dependencies: []

// Module 15975 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJankStatsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx");

export default enforcing;
