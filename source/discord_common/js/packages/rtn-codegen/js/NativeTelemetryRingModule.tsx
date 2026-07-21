// Module ID: 12993
// Function ID: 98856
// Name: enforcing
// Dependencies: []

// Module 12993 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelemetryRingModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx");

export default enforcing;
