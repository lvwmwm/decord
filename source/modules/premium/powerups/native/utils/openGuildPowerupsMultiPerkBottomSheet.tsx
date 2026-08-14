// Module ID: 11984
// Function ID: 11985
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4310, 11985, 2007, 11957, 2]
// Exports: default

// Module 11984 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4310);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11985, dependencyMap.paths), require(11957) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
