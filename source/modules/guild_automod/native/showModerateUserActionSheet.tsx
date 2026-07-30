// Module ID: 11019
// Function ID: 11020
// Name: showModerateUserActionSheet
// Dependencies: [4157, 11020, 1959, 2]
// Exports: default

// Module 11019 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(11020, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
