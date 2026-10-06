// Module ID: 12220
// Function ID: 12221
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4860, 12221, 1987, 12189, 2]
// Exports: default

// Module 12220 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12189 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12221, dependencyMap.paths);
  openLazy(tmp2, openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
