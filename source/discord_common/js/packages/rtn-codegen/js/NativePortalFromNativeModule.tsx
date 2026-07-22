// Module ID: 8275
// Function ID: 65336
// Name: enforcing
// Dependencies: []

// Module 8275 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativePortalFromNativeModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativePortalFromNativeModule.tsx");

export default enforcing;
