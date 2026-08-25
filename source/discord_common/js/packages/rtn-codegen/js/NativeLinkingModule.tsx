// Module ID: 4092
// Function ID: 4093
// Name: enforcing
// Dependencies: [17, 2]

// Module 4092 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeLinkingModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx");

export default enforcing;
