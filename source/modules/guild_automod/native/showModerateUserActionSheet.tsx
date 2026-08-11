// Module ID: 11237
// Function ID: 11238
// Name: showModerateUserActionSheet
// Dependencies: [4271, 11238, 2007, 2]
// Exports: default

// Module 11237 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(11238, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
