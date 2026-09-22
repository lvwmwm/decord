// Module ID: 1340
// Function ID: 1341
// Name: NativeMetaQuestModule
// Dependencies: [17, 2]

// Module 1340 (NativeMetaQuestModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMetaQuestModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMetaQuestModule.tsx");

export default enforcing;
