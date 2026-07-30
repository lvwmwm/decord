// Module ID: 11602
// Function ID: 11603
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4157, 11603, 1959, 2]
// Exports: default

// Module 11602 (openGuildPowerupRollbackSheet)
const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(11603, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
