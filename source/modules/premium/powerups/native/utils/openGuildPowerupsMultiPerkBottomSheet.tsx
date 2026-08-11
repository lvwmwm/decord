// Module ID: 11908
// Function ID: 11909
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4271, 11909, 2007, 11881, 2]
// Exports: default

// Module 11908 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4271);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11909, dependencyMap.paths), require(11881) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
