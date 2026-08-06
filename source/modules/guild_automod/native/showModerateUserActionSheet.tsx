// Module ID: 11150
// Function ID: 11151
// Name: showModerateUserActionSheet
// Dependencies: [4253, 11151, 1988, 2]
// Exports: default

// Module 11150 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(11151, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
