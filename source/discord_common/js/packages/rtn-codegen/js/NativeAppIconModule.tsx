// Module ID: 12262
// Function ID: 94046
// Name: enforcing
// Dependencies: []

// Module 12262 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppIconModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppIconModule.tsx");

export default enforcing;
