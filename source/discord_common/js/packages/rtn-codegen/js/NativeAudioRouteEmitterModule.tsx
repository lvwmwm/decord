// Module ID: 9738
// Function ID: 9739
// Name: enforcing
// Dependencies: [17, 2]

// Module 9738 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioRouteEmitterModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioRouteEmitterModule.tsx");

export default enforcing;
