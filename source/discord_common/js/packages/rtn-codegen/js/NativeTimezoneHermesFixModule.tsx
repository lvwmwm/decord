// Module ID: 3800
// Function ID: 31117
// Name: enforcing
// Dependencies: []

// Module 3800 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTimezoneHermesFixModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTimezoneHermesFixModule.tsx");

export default enforcing;
