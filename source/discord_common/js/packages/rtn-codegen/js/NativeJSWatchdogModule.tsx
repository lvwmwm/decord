// Module ID: 16753
// Function ID: 16754
// Name: enforcing
// Dependencies: [17, 2]

// Module 16753 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
