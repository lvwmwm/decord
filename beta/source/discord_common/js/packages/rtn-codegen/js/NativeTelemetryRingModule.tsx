// Module ID: 2126
// Function ID: 2127
// Name: react-native
// Dependencies: [17, 2]

// Module 2126 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = react_native.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTelemetryRingModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTelemetryRingModule.tsx");

export default enforcing;
