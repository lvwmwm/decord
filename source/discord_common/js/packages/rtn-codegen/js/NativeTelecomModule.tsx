// Module ID: 17413
// Function ID: 17414
// Name: enforcing
// Dependencies: [17, 2]

// Module 17413 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelecomModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelecomModule.tsx");

export default enforcing;
