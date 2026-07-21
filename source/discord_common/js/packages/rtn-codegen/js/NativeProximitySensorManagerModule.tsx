// Module ID: 16027
// Function ID: 123064
// Name: enforcing
// Dependencies: []

// Module 16027 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeProximitySensorManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeProximitySensorManagerModule.tsx");

export default enforcing;
