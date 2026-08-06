// Module ID: 11796
// Function ID: 11797
// Name: openGuildPowerupsBottomSheet
// Dependencies: [4253, 11797, 1988, 2]
// Exports: default

// Module 11796 (openGuildPowerupsBottomSheet)
const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");

export default function openGuildPowerupsBottomSheet(arg0) {
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(11797, dependencyMap.paths), GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
export const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
