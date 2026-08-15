// Module ID: 11012
// Function ID: 11013
// Name: showModerateUserActionSheet
// Dependencies: [4342, 11013, 2007, 2]
// Exports: default

// Module 11012 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(11013, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
