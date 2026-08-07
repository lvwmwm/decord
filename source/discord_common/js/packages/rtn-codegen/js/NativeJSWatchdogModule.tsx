// Module ID: 16404
// Function ID: 16405
// Name: enforcing
// Dependencies: [17, 2]

// Module 16404 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
