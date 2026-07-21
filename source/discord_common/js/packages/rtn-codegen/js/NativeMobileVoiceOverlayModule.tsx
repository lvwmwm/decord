// Module ID: 13334
// Function ID: 101339
// Name: enforcing
// Dependencies: []

// Module 13334 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMobileVoiceOverlayModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMobileVoiceOverlayModule.tsx");

export default enforcing;
