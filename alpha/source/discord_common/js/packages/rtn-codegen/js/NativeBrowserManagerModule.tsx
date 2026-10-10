// Module ID: 5054
// Function ID: 5055
// Name: react-native
// Dependencies: [17, 2]

// Module 5054 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const TurboModuleRegistry = react_native.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeBrowserManagerModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");

export default enforcing;
export const BrowserType = { SAFARI: 0, [0]: "SAFARI", IN_APP: 1, [1]: "IN_APP", CHROME: 2, [2]: "CHROME" };
