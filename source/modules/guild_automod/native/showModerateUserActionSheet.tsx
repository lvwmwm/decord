// Module ID: 11005
// Function ID: 85566
// Name: showModerateUserActionSheet
// Dependencies: [4098, 11006, 1934, 2]
// Exports: default

// Module 11005 (showModerateUserActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11006, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
