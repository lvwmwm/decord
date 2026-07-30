// Module ID: 11605
// Function ID: 11606
// Name: openGuildPowerupsBottomSheet
// Dependencies: [4157, 11606, 1959, 2]
// Exports: default

// Module 11605 (openGuildPowerupsBottomSheet)
const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");

export default function openGuildPowerupsBottomSheet(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(11606, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
