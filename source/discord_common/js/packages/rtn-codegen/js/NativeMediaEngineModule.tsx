// Module ID: 4537
// Function ID: 4538
// Name: enforcing
// Dependencies: [17, 2]

// Module 4537 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMediaEngineModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMediaEngineModule.tsx");

export default enforcing;
