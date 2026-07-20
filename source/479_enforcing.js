// Module ID: 479
// Function ID: 6187
// Name: enforcing
// Dependencies: []

// Module 479 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeFastConnectModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx");

export default enforcing;
