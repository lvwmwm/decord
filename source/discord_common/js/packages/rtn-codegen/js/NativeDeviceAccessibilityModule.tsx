// Module ID: 4812
// Function ID: 4813
// Name: enforcing
// Dependencies: [17, 2]

// Module 4812 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceAccessibilityModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceAccessibilityModule.tsx");

export default enforcing;
