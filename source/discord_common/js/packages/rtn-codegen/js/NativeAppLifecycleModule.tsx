// Module ID: 10547
// Function ID: 81578
// Name: enforcing
// Dependencies: [27, 2]

// Module 10547 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeAppLifecycleModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx");

export default enforcing;
