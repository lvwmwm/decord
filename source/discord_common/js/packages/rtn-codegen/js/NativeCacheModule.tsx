// Module ID: 589
// Function ID: 7009
// Name: enforcing
// Dependencies: []

// Module 589 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCacheModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCacheModule.tsx");

export default enforcing;
