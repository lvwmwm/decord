// Module ID: 16558
// Function ID: 16559
// Name: enforcing
// Dependencies: [17, 2]

// Module 16558 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
