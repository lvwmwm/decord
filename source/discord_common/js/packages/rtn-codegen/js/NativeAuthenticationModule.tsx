// Module ID: 15584
// Function ID: 15585
// Name: enforcing
// Dependencies: [17, 2]

// Module 15584 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAuthenticationModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAuthenticationModule.tsx");

export default enforcing;
