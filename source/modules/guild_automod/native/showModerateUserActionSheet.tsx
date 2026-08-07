// Module ID: 11165
// Function ID: 11166
// Name: showModerateUserActionSheet
// Dependencies: [4270, 11166, 1988, 2]
// Exports: default

// Module 11165 (showModerateUserActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(11166, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
