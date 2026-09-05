// Module ID: 2005
// Function ID: 2006
// Name: enforcing
// Dependencies: [17, 2]

// Module 2005 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppDatabaseModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx");

export default enforcing;
