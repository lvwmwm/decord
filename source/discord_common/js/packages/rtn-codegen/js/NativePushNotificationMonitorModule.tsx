// Module ID: 10173
// Function ID: 10174
// Name: enforcing
// Dependencies: [17, 2]

// Module 10173 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativePushNotificationMonitorModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativePushNotificationMonitorModule.tsx");

export default enforcing;
