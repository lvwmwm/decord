// Module ID: 11904
// Function ID: 11905
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4271, 11905, 1988, 11877, 2]
// Exports: default

// Module 11904 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4271);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11905, dependencyMap.paths), require(11877) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
