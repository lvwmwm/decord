// Module ID: 13982
// Function ID: 13983
// Name: enforcing
// Dependencies: [17, 2]

// Module 13982 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTouchEventAnalyticsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx");

export default enforcing;
