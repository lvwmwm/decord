// Module ID: 4085
// Function ID: 4086
// Name: enforcing
// Dependencies: [17, 2]

// Module 4085 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDateFormatUtilsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDateFormatUtilsModule.tsx");

export default enforcing;
