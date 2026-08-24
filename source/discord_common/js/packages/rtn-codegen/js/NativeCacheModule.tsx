// Module ID: 597
// Function ID: 598
// Name: enforcing
// Dependencies: [17, 2]

// Module 597 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeCacheModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeCacheModule.tsx");

export default enforcing;
