// Module ID: 12299
// Function ID: 12300
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5054, 12300, 1999, 12268, 2]
// Exports: default

// Module 12299 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12268 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12300, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
