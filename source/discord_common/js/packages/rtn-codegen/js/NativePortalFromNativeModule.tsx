// Module ID: 8199
// Function ID: 8200
// Name: enforcing
// Dependencies: [17, 2]

// Module 8199 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativePortalFromNativeModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativePortalFromNativeModule.tsx");

export default enforcing;
