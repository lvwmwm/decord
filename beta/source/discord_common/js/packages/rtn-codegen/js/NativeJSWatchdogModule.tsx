// Module ID: 17832
// Function ID: 17833
// Name: NativeJSWatchdogModule
// Dependencies: [17, 2]

// Module 17832 (NativeJSWatchdogModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
