// Module ID: 12463
// Function ID: 95253
// Name: enforcing
// Dependencies: []

// Module 12463 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCompressionModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCompressionModule.tsx");

export default enforcing;
