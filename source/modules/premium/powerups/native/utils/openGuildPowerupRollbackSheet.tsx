// Module ID: 11542
// Function ID: 89864
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4099, 11543, 1935, 2]
// Exports: default

// Module 11542 (openGuildPowerupRollbackSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(11543, dependencyMap.paths), "GUILD_POWERUP_ROLLBACK_SHEET_KEY", arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
