// Module ID: 4178
// Function ID: 35877
// Name: enforcing
// Dependencies: []

// Module 4178 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMediaEngineModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMediaEngineModule.tsx");

export default enforcing;
