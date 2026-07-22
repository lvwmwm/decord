// Module ID: 3986
// Function ID: 33090
// Name: enforcing
// Dependencies: []

// Module 3986 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTTIManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx");

export default enforcing;
