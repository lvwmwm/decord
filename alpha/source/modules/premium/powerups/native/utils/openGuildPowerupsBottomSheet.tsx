// Module ID: 14309
// Function ID: 14310
// Name: openGuildPowerupsBottomSheet
// Dependencies: [5382, 14310, 2123, 2]
// Exports: default

// Module 14309 (openGuildPowerupsBottomSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");
const GUILD_POWERUPS_BOTTOM_SHEET_KEY_export = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";

export default function openGuildPowerupsBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14310, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export { GUILD_POWERUPS_BOTTOM_SHEET_KEY_export as GUILD_POWERUPS_BOTTOM_SHEET_KEY };
