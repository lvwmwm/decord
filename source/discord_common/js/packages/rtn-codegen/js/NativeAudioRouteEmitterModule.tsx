// Module ID: 8832
// Function ID: 69666
// Name: enforcing
// Dependencies: []

// Module 8832 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioRouteEmitterModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioRouteEmitterModule.tsx");

export default enforcing;
