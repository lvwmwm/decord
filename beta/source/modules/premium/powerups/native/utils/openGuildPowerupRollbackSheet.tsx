// Module ID: 13403
// Function ID: 13404
// Name: openGuildPowerupRollbackSheet
// Dependencies: [5127, 13404, 2119, 2]
// Exports: default

// Module 13403 (openGuildPowerupRollbackSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");
const GUILD_POWERUP_ROLLBACK_SHEET_KEY_export = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";

export default function openGuildPowerupRollbackSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13404, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export { GUILD_POWERUP_ROLLBACK_SHEET_KEY_export as GUILD_POWERUP_ROLLBACK_SHEET_KEY };
