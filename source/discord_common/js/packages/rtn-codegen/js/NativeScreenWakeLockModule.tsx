// Module ID: 10782
// Function ID: 10783
// Name: enforcing
// Dependencies: [17, 2]

// Module 10782 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeScreenWakeLockModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeScreenWakeLockModule.tsx");

export default enforcing;
