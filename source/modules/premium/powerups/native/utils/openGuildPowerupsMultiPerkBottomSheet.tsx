// Module ID: 11574
// Function ID: 90011
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4099, 11575, 1935, 11546, 2]
// Exports: default

// Module 11574 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4099);
  obj.openLazy(require(1935) /* maybeLoadBundle */(11575, dependencyMap.paths), require(11546) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
