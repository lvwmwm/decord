// Module ID: 11613
// Function ID: 90162
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4133, 11614, 1935, 11585, 2]
// Exports: default

// Module 11613 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4133);
  obj.openLazy(require(1935) /* maybeLoadBundle */(11614, dependencyMap.paths), require(11585) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
