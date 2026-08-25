// Module ID: 12104
// Function ID: 12105
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4347, 12105, 2009, 12077, 2]
// Exports: default

// Module 12104 (openGuildPowerupsMultiPerkBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12077 */;

const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(12105, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
