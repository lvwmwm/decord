// Module ID: 16035
// Function ID: 123125
// Name: enforcing
// Dependencies: []

// Module 16035 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeProximitySensorManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeProximitySensorManagerModule.tsx");

export default enforcing;
