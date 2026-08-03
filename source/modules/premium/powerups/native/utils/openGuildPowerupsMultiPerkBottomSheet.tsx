// Module ID: 11756
// Function ID: 11757
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4223, 11757, 1959, 11729, 2]
// Exports: default

// Module 11756 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4223);
  obj.openLazy(require(1959) /* asyncRequireImpl */(11757, dependencyMap.paths), require(11729) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
