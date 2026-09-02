// Module ID: 14457
// Function ID: 14458
// Name: enforcing
// Dependencies: [17, 2]

// Module 14457 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("RTNKeyCommandsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeKeyCommandsModule.tsx");

export default enforcing;
