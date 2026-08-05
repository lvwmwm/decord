// Module ID: 11789
// Function ID: 11790
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4223, 11790, 1959, 11762, 2]
// Exports: default

// Module 11789 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4223);
  obj.openLazy(require(1959) /* asyncRequireImpl */(11790, dependencyMap.paths), require(11762) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
