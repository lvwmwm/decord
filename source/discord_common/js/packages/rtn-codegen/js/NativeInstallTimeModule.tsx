// Module ID: 12507
// Function ID: 95834
// Name: enforcing
// Dependencies: []

// Module 12507 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeInstallTimeModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeInstallTimeModule.tsx");

export default enforcing;
