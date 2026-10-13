// Module ID: 12797
// Function ID: 12798
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5056, 12798, 2000, 12766, 2]
// Exports: default

// Module 12797 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12766 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12798, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
