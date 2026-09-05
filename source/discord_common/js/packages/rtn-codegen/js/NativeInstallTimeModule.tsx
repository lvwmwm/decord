// Module ID: 13700
// Function ID: 13701
// Name: enforcing
// Dependencies: [17, 2]

// Module 13700 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeInstallTimeModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeInstallTimeModule.tsx");

export default enforcing;
