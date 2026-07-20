// Module ID: 11532
// Function ID: 89833
// Name: openGuildPowerupsBottomSheet
// Dependencies: [45154304, 270270464, 491323392, 79429632]
// Exports: default

// Module 11532 (openGuildPowerupsBottomSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsBottomSheet.tsx");

export default function openGuildPowerupsBottomSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "GUILD_POWERUPS_BOTTOM_SHEET_KEY", arg0);
};
export const GUILD_POWERUPS_BOTTOM_SHEET_KEY = "GUILD_POWERUPS_BOTTOM_SHEET_KEY";
