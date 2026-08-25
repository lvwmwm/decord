// Module ID: 13656
// Function ID: 13657
// Name: enforcing
// Dependencies: [17, 2]

// Module 13656 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelemetryRingModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx");

export default enforcing;
