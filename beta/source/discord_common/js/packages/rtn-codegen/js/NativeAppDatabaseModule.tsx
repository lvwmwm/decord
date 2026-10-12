// Module ID: 2110
// Function ID: 2111
// Name: react-native
// Dependencies: [17, 2]

// Module 2110 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = react_native.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppDatabaseModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx");

export default enforcing;
