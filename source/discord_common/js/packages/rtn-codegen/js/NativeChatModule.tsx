// Module ID: 9436
// Function ID: 73457
// Name: enforcing
// Dependencies: []

// Module 9436 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeChatModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeChatModule.tsx");

export default enforcing;
