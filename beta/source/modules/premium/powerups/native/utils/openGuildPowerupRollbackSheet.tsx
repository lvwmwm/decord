// Module ID: 13198
// Function ID: 13199
// Name: openGuildPowerupRollbackSheet
// Dependencies: [5155, 13199, 2002, 2]
// Exports: default

// Module 13198 (openGuildPowerupRollbackSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");
const GUILD_POWERUP_ROLLBACK_SHEET_KEY_export = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";

export default function openGuildPowerupRollbackSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13199, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export { GUILD_POWERUP_ROLLBACK_SHEET_KEY_export as GUILD_POWERUP_ROLLBACK_SHEET_KEY };
