// Module ID: 12334
// Function ID: 12335
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4445, 12335, 2008, 12305, 2]
// Exports: default

// Module 12334 (openGuildPowerupsMultiPerkBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12305 */;

const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(12335, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
