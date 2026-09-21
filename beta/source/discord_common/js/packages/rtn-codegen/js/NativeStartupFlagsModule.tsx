// Module ID: 559
// Function ID: 560
// Name: NativeStartupFlagsModule
// Dependencies: [17, 2]

// Module 559 (NativeStartupFlagsModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeStartupFlagsModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeStartupFlagsModule.tsx");

export default enforcing;
