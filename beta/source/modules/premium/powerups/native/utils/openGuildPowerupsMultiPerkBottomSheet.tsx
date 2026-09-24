// Module ID: 12747
// Function ID: 12748
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4757, 12748, 1984, 12716, 2]
// Exports: default

// Module 12747 (openGuildPowerupsMultiPerkBottomSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12748, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
