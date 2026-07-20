// Module ID: 8269
// Function ID: 65299
// Name: enforcing
// Dependencies: []

// Module 8269 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativePortalFromNativeModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativePortalFromNativeModule.tsx");

export default enforcing;
