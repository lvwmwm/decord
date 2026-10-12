// Module ID: 12284
// Function ID: 12285
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5056, 12285, 2000, 12253, 2]
// Exports: default

// Module 12284 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12285, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
