// Module ID: 1975
// Function ID: 1976
// Name: enforcing
// Dependencies: [17, 2]

// Module 1975 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppDatabaseModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx");

export default enforcing;
