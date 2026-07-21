// Module ID: 3816
// Function ID: 31713
// Name: enforcing
// Dependencies: []

// Module 3816 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDateFormatUtilsModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDateFormatUtilsModule.tsx");

export default enforcing;
