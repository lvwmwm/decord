// Module ID: 9489
// Function ID: 73964
// Name: enforcing
// Dependencies: []

// Module 9489 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCommandClipboardModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCommandClipboardModule.tsx");

export default enforcing;
