// Module ID: 11954
// Function ID: 11955
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4310, 11955, 2007, 2]
// Exports: default

// Module 11954 (openGuildPowerupRollbackSheet)
const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11955, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
