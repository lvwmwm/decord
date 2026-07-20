// Module ID: 13335
// Function ID: 101408
// Name: enforcing
// Dependencies: []

// Module 13335 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioPlayerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioPlayerModule.tsx");

export default enforcing;
