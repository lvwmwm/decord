// Module ID: 13968
// Function ID: 13969
// Name: NativeInstallTimeModule
// Dependencies: [17, 2]

// Module 13968 (NativeInstallTimeModule)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = _mod17.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeInstallTimeModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeInstallTimeModule.tsx");

export default enforcing;
