// Module ID: 16573
// Function ID: 16574
// Name: enforcing
// Dependencies: [17, 2]

// Module 16573 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeJSWatchdogModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeJSWatchdogModule.tsx");

export default enforcing;
