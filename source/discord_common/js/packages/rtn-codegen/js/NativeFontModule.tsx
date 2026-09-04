// Module ID: 10049
// Function ID: 10050
// Name: enforcing
// Dependencies: [17, 2]

// Module 10049 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeFontModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx");

export default enforcing;
