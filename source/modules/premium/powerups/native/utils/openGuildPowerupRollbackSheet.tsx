// Module ID: 11536
// Function ID: 89853
// Name: openGuildPowerupRollbackSheet
// Dependencies: []
// Exports: default

// Module 11536 (openGuildPowerupRollbackSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "GUILD_POWERUP_ROLLBACK_SHEET_KEY", arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
