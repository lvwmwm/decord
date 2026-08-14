// Module ID: 11299
// Function ID: 11300
// Name: showModerateUserActionSheet
// Dependencies: [4310, 11300, 2007, 2]
// Exports: default

// Module 11299 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11300, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
