// Module ID: 13002
// Function ID: 98911
// Name: enforcing
// Dependencies: []

// Module 13002 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelemetryRingModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx");

export default enforcing;
