// Module ID: 7523
// Function ID: 7524
// Name: enforcing
// Dependencies: [17, 2]

// Module 7523 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAdsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAdsModule.tsx");

export default enforcing;
