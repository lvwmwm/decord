// Module ID: 12044
// Function ID: 12045
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4413, 12045, 2010, 12015, 2]
// Exports: default

// Module 12044 (openGuildPowerupsMultiPerkBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12015 */;

const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(12045, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
