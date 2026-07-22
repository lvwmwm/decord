// Module ID: 16043
// Function ID: 123167
// Name: enforcing
// Dependencies: []

// Module 16043 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeProximitySensorManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeProximitySensorManagerModule.tsx");

export default enforcing;
