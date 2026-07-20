// Module ID: 16041
// Function ID: 123253
// Name: enforcing
// Dependencies: []

// Module 16041 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelecomModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelecomModule.tsx");

export default enforcing;
