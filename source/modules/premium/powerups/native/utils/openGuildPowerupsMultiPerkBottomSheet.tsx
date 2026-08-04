// Module ID: 11817
// Function ID: 11818
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4253, 11818, 1959, 11790, 2]
// Exports: default

// Module 11817 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4253);
  obj.openLazy(require(1959) /* asyncRequireImpl */(11818, dependencyMap.paths), require(11790) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
