// Module ID: 11790
// Function ID: 11791
// Name: openGuildPowerupsBottomSheet
// Dependencies: [4253, 11791, 1959, 2]
// Exports: default

// Module 11790 (openGuildPowerupsBottomSheet)
const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");

export default function openGuildPowerupsBottomSheet(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(11791, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
