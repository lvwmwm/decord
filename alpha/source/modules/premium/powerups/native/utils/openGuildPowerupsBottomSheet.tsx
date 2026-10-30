// Module ID: 14041
// Function ID: 14042
// Name: openGuildPowerupsBottomSheet
// Dependencies: [5253, 14042, 1995, 2]
// Exports: default

// Module 14041 (openGuildPowerupsBottomSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");
const GUILD_POWERUPS_BOTTOM_SHEET_KEY_export = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";

export default function openGuildPowerupsBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14042, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export { GUILD_POWERUPS_BOTTOM_SHEET_KEY_export as GUILD_POWERUPS_BOTTOM_SHEET_KEY };
