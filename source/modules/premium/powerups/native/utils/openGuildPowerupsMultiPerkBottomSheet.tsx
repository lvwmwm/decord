// Module ID: 11651
// Function ID: 11652
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4161, 11652, 1959, 11622, 2]
// Exports: default

// Module 11651 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4161);
  obj.openLazy(require(1959) /* asyncRequireImpl */(11652, dependencyMap.paths), require(11622) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
