// Module ID: 14652
// Function ID: 110496
// Name: enforcing
// Dependencies: []

// Module 14652 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAuthenticationModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAuthenticationModule.tsx");

export default enforcing;
