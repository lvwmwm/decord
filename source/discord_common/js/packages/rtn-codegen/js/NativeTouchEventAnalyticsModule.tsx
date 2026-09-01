// Module ID: 14203
// Function ID: 14204
// Name: enforcing
// Dependencies: [17, 2]

// Module 14203 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTouchEventAnalyticsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx");

export default enforcing;
