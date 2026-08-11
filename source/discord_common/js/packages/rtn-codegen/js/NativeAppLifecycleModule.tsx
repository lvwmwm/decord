// Module ID: 10607
// Function ID: 10608
// Name: enforcing
// Dependencies: [17, 2]

// Module 10607 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeAppLifecycleModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppLifecycleModule.tsx");

export default enforcing;
