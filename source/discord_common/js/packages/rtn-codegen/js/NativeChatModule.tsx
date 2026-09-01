// Module ID: 10912
// Function ID: 10913
// Name: enforcing
// Dependencies: [17, 2]

// Module 10912 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeChatModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeChatModule.tsx");

export default enforcing;
