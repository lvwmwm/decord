// Module ID: 12503
// Function ID: 95808
// Name: enforcing
// Dependencies: []

// Module 12503 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppRatingRequestModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppRatingRequestModule.tsx");

export default enforcing;
