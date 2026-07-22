// Module ID: 13388
// Function ID: 101763
// Name: enforcing
// Dependencies: []

// Module 13388 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("RTNKeyCommandsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeKeyCommandsModule.tsx");

export default enforcing;
