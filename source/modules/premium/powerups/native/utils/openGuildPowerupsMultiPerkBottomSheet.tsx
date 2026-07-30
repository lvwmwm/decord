// Module ID: 11633
// Function ID: 11634
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4157, 11634, 1959, 11605, 2]
// Exports: default

// Module 11633 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4157);
  obj.openLazy(require(1959) /* asyncRequireImpl */(11634, dependencyMap.paths), require(11605) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
