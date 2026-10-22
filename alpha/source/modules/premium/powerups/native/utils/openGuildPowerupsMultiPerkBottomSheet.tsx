// Module ID: 13405
// Function ID: 13406
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5196, 13406, 2002, 13374, 2]
// Exports: default

// Module 13405 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 13374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13406, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
