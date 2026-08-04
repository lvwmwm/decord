// Module ID: 3980
// Function ID: 3981
// Name: enforcing
// Dependencies: [17, 2]

// Module 3980 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeLinkingModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx");

export default enforcing;
