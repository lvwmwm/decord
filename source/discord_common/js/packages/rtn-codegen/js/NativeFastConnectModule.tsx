// Module ID: 13637
// Function ID: 13638
// Name: enforcing
// Dependencies: [17, 2]

// Module 13637 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeFastConnectModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx");

export default enforcing;
