// Module ID: 11793
// Function ID: 11794
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4253, 11794, 1988, 2]
// Exports: default

// Module 11793 (openGuildPowerupRollbackSheet)
const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(11794, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
