// Module ID: 9799
// Function ID: 9800
// Name: enforcing
// Dependencies: [17, 2]

// Module 9799 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioRouteEmitterModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioRouteEmitterModule.tsx");

export default enforcing;
