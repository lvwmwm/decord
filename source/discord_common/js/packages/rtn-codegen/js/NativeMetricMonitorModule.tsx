// Module ID: 7359
// Function ID: 7360
// Name: enforcing
// Dependencies: [17, 2]

// Module 7359 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMetricMonitorModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMetricMonitorModule.tsx");

export default enforcing;
