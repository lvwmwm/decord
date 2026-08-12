// Module ID: 11938
// Function ID: 11939
// Name: openGuildPowerupsBottomSheet
// Dependencies: [4312, 11939, 2007, 2]
// Exports: default

// Module 11938 (openGuildPowerupsBottomSheet)
const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");

export default function openGuildPowerupsBottomSheet(arg0) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(11939, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
