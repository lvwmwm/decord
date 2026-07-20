// Module ID: 10587
// Function ID: 82620
// Name: enforcing
// Dependencies: []

// Module 10587 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeScreenWakeLockModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeScreenWakeLockModule.tsx");

export default enforcing;
