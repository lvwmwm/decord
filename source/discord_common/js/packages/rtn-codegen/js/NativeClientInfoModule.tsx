// Module ID: 1344
// Function ID: 1345
// Name: enforcing
// Dependencies: [17, 2]

// Module 1344 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeClientInfoModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx");

export default enforcing;
