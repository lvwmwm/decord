// Module ID: 12496
// Function ID: 95785
// Name: enforcing
// Dependencies: []

// Module 12496 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppRatingRequestModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppRatingRequestModule.tsx");

export default enforcing;
