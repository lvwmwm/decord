// Module ID: 11579
// Function ID: 90045
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4098, 11580, 1934, 11550, 2]
// Exports: default

// Module 11579 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4098);
  obj.openLazy(require(1934) /* maybeLoadBundle */(11580, dependencyMap.paths), require(11550) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
