// Module ID: 6835
// Function ID: 53989
// Name: enforcing
// Dependencies: []

// Module 6835 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMetricMonitorModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMetricMonitorModule.tsx");

export default enforcing;
