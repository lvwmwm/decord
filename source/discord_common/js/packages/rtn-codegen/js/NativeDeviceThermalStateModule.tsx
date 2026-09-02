// Module ID: 9473
// Function ID: 9474
// Name: enforcing
// Dependencies: [17, 2]

// Module 9473 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceThermalStateModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceThermalStateModule.tsx");

export default enforcing;
