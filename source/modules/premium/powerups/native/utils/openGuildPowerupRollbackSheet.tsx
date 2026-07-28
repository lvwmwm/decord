// Module ID: 11582
// Function ID: 90020
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4133, 11583, 1935, 2]
// Exports: default

// Module 11582 (openGuildPowerupRollbackSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(11583, dependencyMap.paths), "GUILD_POWERUP_ROLLBACK_SHEET_KEY", arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
