// Module ID: 7834
// Function ID: 7835
// Name: enforcing
// Dependencies: [17, 2]

// Module 7834 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppIconModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppIconModule.tsx");

export default enforcing;
