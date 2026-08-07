// Module ID: 11838
// Function ID: 11839
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4270, 11839, 1988, 11811, 2]
// Exports: default

// Module 11838 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4270);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11839, dependencyMap.paths), require(11811) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
