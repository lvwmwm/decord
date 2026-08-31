// Module ID: 1640
// Function ID: 1641
// Name: enforcing
// Dependencies: [17, 2]

// Module 1640 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeSafeAreaInsetsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx");

export default enforcing;
