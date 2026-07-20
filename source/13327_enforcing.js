// Module ID: 13327
// Function ID: 101316
// Name: enforcing
// Dependencies: []

// Module 13327 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMobileVoiceOverlayModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMobileVoiceOverlayModule.tsx");

export default enforcing;
