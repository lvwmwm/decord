// Module ID: 11968
// Function ID: 11969
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4310, 11969, 2007, 11941, 2]
// Exports: default

// Module 11968 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4310);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11969, dependencyMap.paths), require(11941) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
