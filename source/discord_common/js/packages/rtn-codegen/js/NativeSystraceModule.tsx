// Module ID: 13211
// Function ID: 100102
// Name: enforcing
// Dependencies: []

// Module 13211 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeSystraceModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeSystraceModule.tsx");

export default enforcing;
