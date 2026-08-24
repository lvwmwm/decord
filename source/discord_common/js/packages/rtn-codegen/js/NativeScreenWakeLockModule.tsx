// Module ID: 11868
// Function ID: 11869
// Name: enforcing
// Dependencies: [17, 2]

// Module 11868 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeScreenWakeLockModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeScreenWakeLockModule.tsx");

export default enforcing;
