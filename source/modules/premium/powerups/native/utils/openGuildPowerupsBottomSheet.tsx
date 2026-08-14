// Module ID: 11957
// Function ID: 11958
// Name: openGuildPowerupsBottomSheet
// Dependencies: [4310, 11958, 2007, 2]
// Exports: default

// Module 11957 (openGuildPowerupsBottomSheet)
const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");

export default function openGuildPowerupsBottomSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11958, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
