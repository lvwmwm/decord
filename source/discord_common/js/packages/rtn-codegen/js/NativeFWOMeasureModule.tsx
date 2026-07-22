// Module ID: 9300
// Function ID: 72643
// Name: NativeFWOMeasureModule
// Dependencies: []

// Module 9300 (NativeFWOMeasureModule)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const value = TurboModuleRegistry.get("NativeFWOMeasureModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeFWOMeasureModule.tsx");

export default value;
