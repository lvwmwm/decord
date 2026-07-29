// Module ID: 11637
// Function ID: 11638
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4157, 11638, 1959, 11609, 2]
// Exports: default

// Module 11637 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4157);
  obj.openLazy(require(1959) /* asyncRequireImpl */(11638, dependencyMap.paths), require(11609) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
