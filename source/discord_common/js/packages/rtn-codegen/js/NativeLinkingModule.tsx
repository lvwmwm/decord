// Module ID: 4015
// Function ID: 4016
// Name: enforcing
// Dependencies: [17, 2]

// Module 4015 (enforcing)
import { TurboModuleRegistry } from "get ActivityIndicator";

const enforcing = TurboModuleRegistry.getEnforcing("NativeLinkingModule");
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeLinkingModule.tsx");

export default enforcing;
