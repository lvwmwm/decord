// Module ID: 18002
// Function ID: 18003
// Name: NativeTelecomModule
// Dependencies: [17, 2]

// Module 18002 (NativeTelecomModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelecomModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelecomModule.tsx");

export default enforcing;
