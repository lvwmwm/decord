// Module ID: 4329
// Function ID: 4330
// Name: NativeLinkingModule
// Dependencies: [17, 2]

// Module 4329 (NativeLinkingModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeLinkingModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx");

export default enforcing;
