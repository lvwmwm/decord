// Module ID: 16478
// Function ID: 127329
// Name: enforcing
// Dependencies: []

// Module 16478 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeReactAssetModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeReactAssetModule.tsx");

export default enforcing;
