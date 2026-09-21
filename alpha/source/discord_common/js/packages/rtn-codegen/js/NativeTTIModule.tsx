// Module ID: 7910
// Function ID: 7911
// Name: NativeTTIModule
// Dependencies: [17, 2]

// Module 7910 (NativeTTIModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTTIModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTTIModule.tsx");

export default enforcing;
