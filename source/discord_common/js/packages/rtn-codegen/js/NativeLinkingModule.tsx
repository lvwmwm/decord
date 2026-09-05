// Module ID: 4253
// Function ID: 4254
// Name: enforcing
// Dependencies: [17, 2]

// Module 4253 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeLinkingModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx");

export default enforcing;
