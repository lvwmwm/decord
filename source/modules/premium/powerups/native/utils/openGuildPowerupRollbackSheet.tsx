// Module ID: 11546
// Function ID: 89902
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4098, 11547, 1934, 2]
// Exports: default

// Module 11546 (openGuildPowerupRollbackSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11547, dependencyMap.paths), "GUILD_POWERUP_ROLLBACK_SHEET_KEY", arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
