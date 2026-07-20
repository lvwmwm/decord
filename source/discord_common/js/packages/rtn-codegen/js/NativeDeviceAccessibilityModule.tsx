// Module ID: 4521
// Function ID: 39704
// Name: enforcing
// Dependencies: []

// Module 4521 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceAccessibilityModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx");

export default enforcing;
