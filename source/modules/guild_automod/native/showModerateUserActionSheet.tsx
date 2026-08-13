// Module ID: 11282
// Function ID: 11283
// Name: showModerateUserActionSheet
// Dependencies: [4310, 11283, 2007, 2]
// Exports: default

// Module 11282 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11283, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
