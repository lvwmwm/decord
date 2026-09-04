// Module ID: 8379
// Function ID: 8380
// Name: enforcing
// Dependencies: [17, 2]

// Module 8379 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDigitalCredentialModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDigitalCredentialModule.tsx");

export default enforcing;
