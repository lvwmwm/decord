// Module ID: 8269
// Function ID: 8270
// Name: enforcing
// Dependencies: [17, 2]

// Module 8269 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativePortalFromNativeModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativePortalFromNativeModule.tsx");

export default enforcing;
