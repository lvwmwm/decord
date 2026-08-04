// Module ID: 4252
// Function ID: 4253
// Name: enforcing
// Dependencies: [17, 2]

// Module 4252 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeBrowserManagerModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");

export default enforcing;
export const BrowserType = { SAFARI: 0, [0]: "SAFARI", IN_APP: 1, [1]: "IN_APP", CHROME: 2, [2]: "CHROME" };
