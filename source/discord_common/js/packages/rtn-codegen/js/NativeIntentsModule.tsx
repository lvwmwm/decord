// Module ID: 4622
// Function ID: 4623
// Name: enforcing
// Dependencies: [17, 2]

// Module 4622 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeIntentsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeIntentsModule.tsx");

export default enforcing;
