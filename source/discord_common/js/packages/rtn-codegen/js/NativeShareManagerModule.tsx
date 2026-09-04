// Module ID: 8292
// Function ID: 8293
// Name: enforcing
// Dependencies: [17, 2]

// Module 8292 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeShareManagerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");

export default enforcing;
