// Module ID: 17821
// Function ID: 17822
// Name: NativeJSWatchdogModule
// Dependencies: [17, 2]

// Module 17821 (NativeJSWatchdogModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
