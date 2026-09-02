// Module ID: 15813
// Function ID: 15814
// Name: enforcing
// Dependencies: [17, 2]

// Module 15813 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeRemoteAuthCryptoModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeRemoteAuthCryptoModule.tsx");

export default enforcing;
