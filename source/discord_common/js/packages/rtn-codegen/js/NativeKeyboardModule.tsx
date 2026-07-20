// Module ID: 1821
// Function ID: 19994
// Name: enforcing
// Dependencies: []

// Module 1821 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeKeyboardModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeKeyboardModule.tsx");

export default enforcing;
