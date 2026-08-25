// Module ID: 16751
// Function ID: 16752
// Name: enforcing
// Dependencies: [17, 2]

// Module 16751 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJankStatsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx");

export default enforcing;
