// Module ID: 3993
// Function ID: 33121
// Name: enforcing
// Dependencies: []

// Module 3993 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeArchitectureProvider");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeArchitectureProvider.tsx");

export default enforcing;
