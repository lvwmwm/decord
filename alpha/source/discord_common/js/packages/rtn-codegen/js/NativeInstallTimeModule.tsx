// Module ID: 13973
// Function ID: 13974
// Name: NativeInstallTimeModule
// Dependencies: [17, 2]

// Module 13973 (NativeInstallTimeModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeInstallTimeModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeInstallTimeModule.tsx");

export default enforcing;
