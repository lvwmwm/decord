// Module ID: 14420
// Function ID: 14421
// Name: enforcing
// Dependencies: [17, 2]

// Module 14420 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioPlayerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioPlayerModule.tsx");

export default enforcing;
