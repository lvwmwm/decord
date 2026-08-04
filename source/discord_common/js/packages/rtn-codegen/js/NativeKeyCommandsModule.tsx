// Module ID: 13748
// Function ID: 13749
// Name: enforcing
// Dependencies: [17, 2]

// Module 13748 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("RTNKeyCommandsModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeKeyCommandsModule.tsx");

export default enforcing;
