// Module ID: 13849
// Function ID: 13850
// Name: enforcing
// Dependencies: [17, 2]

// Module 13849 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("RTNKeyCommandsModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeKeyCommandsModule.tsx");

export default enforcing;
