// Module ID: 10480
// Function ID: 81207
// Name: enforcing
// Dependencies: []

// Module 10480 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppLifecycleModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx");

export default enforcing;
