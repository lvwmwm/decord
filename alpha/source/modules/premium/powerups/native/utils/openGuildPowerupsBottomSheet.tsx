// Module ID: 14076
// Function ID: 14077
// Name: openGuildPowerupsBottomSheet
// Dependencies: [5258, 14077, 1994, 2]
// Exports: default

// Module 14076 (openGuildPowerupsBottomSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");
const GUILD_POWERUPS_BOTTOM_SHEET_KEY_export = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";

export default function openGuildPowerupsBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14077, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export { GUILD_POWERUPS_BOTTOM_SHEET_KEY_export as GUILD_POWERUPS_BOTTOM_SHEET_KEY };
