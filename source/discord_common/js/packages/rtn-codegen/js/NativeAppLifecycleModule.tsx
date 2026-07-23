// Module ID: 10490
// Function ID: 81257
// Name: enforcing
// Dependencies: [27, 2]

// Module 10490 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeAppLifecycleModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx");

export default enforcing;
