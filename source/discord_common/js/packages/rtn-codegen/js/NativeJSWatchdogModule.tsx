// Module ID: 15965
// Function ID: 122461
// Name: enforcing
// Dependencies: []

// Module 15965 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
