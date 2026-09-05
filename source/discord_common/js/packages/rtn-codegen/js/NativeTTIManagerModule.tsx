// Module ID: 4424
// Function ID: 4425
// Name: enforcing
// Dependencies: [17, 2]

// Module 4424 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTTIManagerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx");

export default enforcing;
