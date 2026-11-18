// Module ID: 13331
// Function ID: 13332
// Name: openGuildPowerupRollbackSheet
// Dependencies: [5037, 13332, 2121, 2]
// Exports: default

// Module 13331 (openGuildPowerupRollbackSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");
const GUILD_POWERUP_ROLLBACK_SHEET_KEY_export = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";

export default function openGuildPowerupRollbackSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13332, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export { GUILD_POWERUP_ROLLBACK_SHEET_KEY_export as GUILD_POWERUP_ROLLBACK_SHEET_KEY };
