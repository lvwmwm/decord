// Module ID: 11573
// Function ID: 90006
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4099, 11574, 1935, 11545, 2]
// Exports: default

// Module 11573 (openGuildPowerupsMultiPerkBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(4099);
  obj.openLazy(require(1935) /* maybeLoadBundle */(11574, dependencyMap.paths), require(11545) /* openGuildPowerupsBottomSheet */.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
