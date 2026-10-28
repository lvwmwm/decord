// Module ID: 13705
// Function ID: 13706
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5246, 13706, 1999, 13674, 2]
// Exports: default

// Module 13705 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 13674 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13706, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
