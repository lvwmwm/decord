// Module ID: 17836
// Function ID: 17837
// Name: NativeOnDemandResourceModule
// Dependencies: [17, 2]

// Module 17836 (NativeOnDemandResourceModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeOnDemandResourceModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeOnDemandResourceModule.tsx");

export default enforcing;
