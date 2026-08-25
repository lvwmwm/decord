// Module ID: 15351
// Function ID: 15352
// Name: enforcing
// Dependencies: [17, 2]

// Module 15351 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeRemoteAuthCryptoModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeRemoteAuthCryptoModule.tsx");

export default enforcing;
