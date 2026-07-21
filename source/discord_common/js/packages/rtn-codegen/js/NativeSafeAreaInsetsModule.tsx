// Module ID: 1569
// Function ID: 17632
// Name: enforcing
// Dependencies: []

// Module 1569 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeSafeAreaInsetsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx");

export default enforcing;
