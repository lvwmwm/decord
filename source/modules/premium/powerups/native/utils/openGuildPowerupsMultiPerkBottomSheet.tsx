// Module ID: 11606
// Function ID: 90283
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4098, 11607, 1934, 11579, 2]
// Exports: default

// Module 11606 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4098);
  obj.openLazy(require(1934) /* maybeLoadBundle */(11607, dependencyMap.paths), require(11579) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
