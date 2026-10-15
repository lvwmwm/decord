// Module ID: 13130
// Function ID: 13131
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [5115, 13131, 2000, 13099, 2]
// Exports: default

// Module 13130 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 13099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13131, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
