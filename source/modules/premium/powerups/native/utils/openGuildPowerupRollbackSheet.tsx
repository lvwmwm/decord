// Module ID: 11787
// Function ID: 11788
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4253, 11788, 1959, 2]
// Exports: default

// Module 11787 (openGuildPowerupRollbackSheet)
const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(11788, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
