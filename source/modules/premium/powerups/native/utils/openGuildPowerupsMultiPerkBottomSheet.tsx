// Module ID: 11823
// Function ID: 11824
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4253, 11824, 1988, 11796, 2]
// Exports: default

// Module 11823 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4253);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11824, dependencyMap.paths), require(11796) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
