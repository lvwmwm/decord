// Module ID: 11967
// Function ID: 11968
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4310, 11968, 2007, 11940, 2]
// Exports: default

// Module 11967 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4310);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11968, dependencyMap.paths), require(11940) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
