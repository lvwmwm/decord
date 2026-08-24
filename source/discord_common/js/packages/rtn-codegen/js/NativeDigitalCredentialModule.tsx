// Module ID: 6602
// Function ID: 6603
// Name: enforcing
// Dependencies: [17, 2]

// Module 6602 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDigitalCredentialModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDigitalCredentialModule.tsx");

export default enforcing;
