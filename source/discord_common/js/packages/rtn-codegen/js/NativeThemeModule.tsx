// Module ID: 13251
// Function ID: 100568
// Name: enforcing
// Dependencies: []

// Module 13251 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeThemeModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx");

export default enforcing;
