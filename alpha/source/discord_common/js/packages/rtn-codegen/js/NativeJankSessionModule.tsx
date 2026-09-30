// Module ID: 17400
// Function ID: 17401
// Name: NativeJankSessionModule
// Dependencies: [17, 2]

// Module 17400 (NativeJankSessionModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJankSessionModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJankSessionModule.tsx");

export default enforcing;
