// Module ID: 4095
// Function ID: 33927
// Name: enforcing
// Dependencies: []

// Module 4095 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeBrowserManagerModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");

export default enforcing;
export const BrowserType = { SAFARI: 0, [0]: "SAFARI", IN_APP: 1, [1]: "IN_APP", CHROME: 2, [2]: "CHROME" };
