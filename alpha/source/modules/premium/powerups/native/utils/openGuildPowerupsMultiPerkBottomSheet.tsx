// Module ID: 13438
// Function ID: 13439
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5127, 13439, 2119, 13408, 2]
// Exports: default

// Module 13438 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 13408 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13439, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
