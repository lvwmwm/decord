// Module ID: 11965
// Function ID: 11966
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4312, 11966, 2007, 11938, 2]
// Exports: default

// Module 11965 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4312);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11966, dependencyMap.paths), require(11938) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
