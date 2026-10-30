// Module ID: 14070
// Function ID: 14071
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5253, 14071, 1995, 14041, 2]
// Exports: default

// Module 14070 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 14041 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(14071, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
