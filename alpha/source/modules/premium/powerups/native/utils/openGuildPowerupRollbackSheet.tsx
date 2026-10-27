// Module ID: 13452
// Function ID: 13453
// Name: openGuildPowerupRollbackSheet
// Dependencies: [5211, 13453, 1999, 2]
// Exports: default

// Module 13452 (openGuildPowerupRollbackSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");
const GUILD_POWERUP_ROLLBACK_SHEET_KEY_export = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";

export default function openGuildPowerupRollbackSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13453, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export { GUILD_POWERUP_ROLLBACK_SHEET_KEY_export as GUILD_POWERUP_ROLLBACK_SHEET_KEY };
