// Module ID: 5057
// Function ID: 5058
// Name: enforcing
// Dependencies: [17, 2]

// Module 5057 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceSettingsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx");

export default enforcing;
