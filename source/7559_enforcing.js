// Module ID: 7559
// Function ID: 60521
// Name: enforcing
// Dependencies: []

// Module 7559 (enforcing)
const TurboModuleRegistry = require(dependencyMap[0]).TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDigitalCredentialModule");
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDigitalCredentialModule.tsx");

export default enforcing;
