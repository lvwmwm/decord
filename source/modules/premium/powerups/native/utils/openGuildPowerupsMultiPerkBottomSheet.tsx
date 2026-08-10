// Module ID: 11905
// Function ID: 11906
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4271, 11906, 1988, 11878, 2]
// Exports: default

// Module 11905 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4271);
  obj.openLazy(require(1988) /* asyncRequireImpl */(11906, dependencyMap.paths), require(11878) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
