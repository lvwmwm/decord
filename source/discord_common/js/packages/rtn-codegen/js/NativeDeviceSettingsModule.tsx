// Module ID: 5101
// Function ID: 5102
// Name: enforcing
// Dependencies: [17, 2]

// Module 5101 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceSettingsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx");

export default enforcing;
