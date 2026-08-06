// Module ID: 16378
// Function ID: 16379
// Name: enforcing
// Dependencies: [17, 2]

// Module 16378 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
