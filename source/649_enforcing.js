// Module ID: 649
// Function ID: 7391
// Name: enforcing
// Dependencies: []

// Module 649 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeClientInfoModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx");

export default enforcing;
