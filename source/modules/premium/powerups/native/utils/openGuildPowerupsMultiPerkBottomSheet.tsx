// Module ID: 11568
// Function ID: 89983
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: []
// Exports: default

// Module 11568 (openGuildPowerupsMultiPerkBottomSheet)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = importDefault(dependencyMap[0]);
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), require(dependencyMap[3]).GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
