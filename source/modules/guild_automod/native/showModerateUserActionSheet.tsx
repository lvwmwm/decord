// Module ID: 10999
// Function ID: 85310
// Name: showModerateUserActionSheet
// Dependencies: [4133, 11000, 1935, 2]
// Exports: default

// Module 10999 (showModerateUserActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(11000, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
