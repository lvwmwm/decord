// Module ID: 14065
// Function ID: 14066
// Name: enforcing
// Dependencies: [17, 2]

// Module 14065 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelemetryRingModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx");

export default enforcing;
