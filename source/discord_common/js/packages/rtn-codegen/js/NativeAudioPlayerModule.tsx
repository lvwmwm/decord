// Module ID: 13976
// Function ID: 13977
// Name: enforcing
// Dependencies: [17, 2]

// Module 13976 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioPlayerModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioPlayerModule.tsx");

export default enforcing;
