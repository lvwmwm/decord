// Module ID: 14076
// Function ID: 14077
// Name: enforcing
// Dependencies: [17, 2]

// Module 14076 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMobileVoiceOverlayModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMobileVoiceOverlayModule.tsx");

export default enforcing;
