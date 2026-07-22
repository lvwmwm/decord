// Module ID: 4301
// Function ID: 37662
// Name: enforcing
// Dependencies: []

// Module 4301 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeIntentsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeIntentsModule.tsx");

export default enforcing;
