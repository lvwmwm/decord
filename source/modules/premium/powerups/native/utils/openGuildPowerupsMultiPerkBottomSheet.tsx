// Module ID: 11715
// Function ID: 11716
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4342, 11716, 2007, 11686, 2]
// Exports: default

// Module 11715 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4342);
  obj.openLazy(require(2007) /* asyncRequireImpl */(11716, dependencyMap.paths), require(11686) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
