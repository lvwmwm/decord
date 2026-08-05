// Module ID: 16338
// Function ID: 16339
// Name: enforcing
// Dependencies: [17, 2]

// Module 16338 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
