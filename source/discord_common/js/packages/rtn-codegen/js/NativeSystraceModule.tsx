// Module ID: 14047
// Function ID: 14048
// Name: enforcing
// Dependencies: [17, 2]

// Module 14047 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeSystraceModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeSystraceModule.tsx");

export default enforcing;
