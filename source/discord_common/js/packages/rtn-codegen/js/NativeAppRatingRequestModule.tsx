// Module ID: 13574
// Function ID: 13575
// Name: enforcing
// Dependencies: [17, 2]

// Module 13574 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppRatingRequestModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppRatingRequestModule.tsx");

export default enforcing;
