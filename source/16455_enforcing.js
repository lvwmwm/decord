// Module ID: 16455
// Function ID: 127192
// Name: enforcing
// Dependencies: []

// Module 16455 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeReactAssetModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeReactAssetModule.tsx");

export default enforcing;
