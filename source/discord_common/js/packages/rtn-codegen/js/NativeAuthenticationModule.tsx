// Module ID: 14663
// Function ID: 110571
// Name: enforcing
// Dependencies: []

// Module 14663 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAuthenticationModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAuthenticationModule.tsx");

export default enforcing;
