// Module ID: 672
// Function ID: 673
// Name: enforcing
// Dependencies: [17, 2]

// Module 672 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeClientInfoModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx");

export default enforcing;
