// Module ID: 2001
// Function ID: 2002
// Name: NativeMediaEngineModule
// Dependencies: [17, 2]

// Module 2001 (NativeMediaEngineModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMediaEngineModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMediaEngineModule.tsx");

export default enforcing;
