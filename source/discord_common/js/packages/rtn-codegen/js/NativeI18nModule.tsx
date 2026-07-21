// Module ID: 16460
// Function ID: 127220
// Name: enforcing
// Dependencies: []

// Module 16460 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeI18nModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeI18nModule.tsx");

export default enforcing;
