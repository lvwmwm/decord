// Module ID: 17720
// Function ID: 17721
// Name: enforcing
// Dependencies: [17, 2]

// Module 17720 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeI18nModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeI18nModule.tsx");

export default enforcing;
