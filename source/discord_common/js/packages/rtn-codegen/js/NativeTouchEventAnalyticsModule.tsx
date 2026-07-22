// Module ID: 13357
// Function ID: 101546
// Name: enforcing
// Dependencies: []

// Module 13357 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTouchEventAnalyticsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx");

export default enforcing;
