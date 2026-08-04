// Module ID: 11144
// Function ID: 11145
// Name: showModerateUserActionSheet
// Dependencies: [4253, 11145, 1959, 2]
// Exports: default

// Module 11144 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(11145, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
