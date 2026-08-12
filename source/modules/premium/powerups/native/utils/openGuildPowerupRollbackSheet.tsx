// Module ID: 11935
// Function ID: 11936
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4312, 11936, 2007, 2]
// Exports: default

// Module 11935 (openGuildPowerupRollbackSheet)
const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(11936, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
