// Module ID: 7364
// Function ID: 7365
// Name: enforcing
// Dependencies: [17, 2]

// Module 7364 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTTIModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTTIModule.tsx");

export default enforcing;
