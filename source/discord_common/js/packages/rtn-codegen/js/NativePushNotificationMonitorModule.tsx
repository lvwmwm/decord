// Module ID: 10313
// Function ID: 79625
// Name: enforcing
// Dependencies: []

// Module 10313 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativePushNotificationMonitorModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativePushNotificationMonitorModule.tsx");

export default enforcing;
