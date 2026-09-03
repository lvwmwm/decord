// Module ID: 17333
// Function ID: 17334
// Name: enforcing
// Dependencies: [17, 2]

// Module 17333 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelecomModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelecomModule.tsx");

export default enforcing;
