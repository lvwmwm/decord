// Module ID: 647
// Function ID: 7389
// Name: enforcing
// Dependencies: []

// Module 647 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMetaQuestModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMetaQuestModule.tsx");

export default enforcing;
