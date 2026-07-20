// Module ID: 277
// Function ID: 3435
// Name: NativeStartupFlagsModule
// Dependencies: []

// Module 277 (NativeStartupFlagsModule)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const value = TurboModuleRegistry.get("NativeStartupFlagsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeStartupFlagsModule.tsx");

export default value;
