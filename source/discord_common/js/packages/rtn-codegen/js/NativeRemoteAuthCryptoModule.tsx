// Module ID: 14650
// Function ID: 110487
// Name: enforcing
// Dependencies: []

// Module 14650 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeRemoteAuthCryptoModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeRemoteAuthCryptoModule.tsx");

export default enforcing;
