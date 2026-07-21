// Module ID: 12505
// Function ID: 95812
// Name: enforcing
// Dependencies: []

// Module 12505 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeInstallTimeModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeInstallTimeModule.tsx");

export default enforcing;
