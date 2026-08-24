// Module ID: 4068
// Function ID: 4069
// Name: enforcing
// Dependencies: [17, 2]

// Module 4068 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTimezoneHermesFixModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTimezoneHermesFixModule.tsx");

export default enforcing;
