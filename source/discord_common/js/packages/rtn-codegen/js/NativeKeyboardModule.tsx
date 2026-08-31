// Module ID: 1892
// Function ID: 1893
// Name: enforcing
// Dependencies: [17, 2]

// Module 1892 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeKeyboardModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeKeyboardModule.tsx");

export default enforcing;
