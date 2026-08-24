// Module ID: 9105
// Function ID: 9106
// Name: enforcing
// Dependencies: [17, 2]

// Module 9105 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeShareManagerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeShareManagerModule.tsx");

export default enforcing;
