// Module ID: 10961
// Function ID: 85187
// Name: showModerateUserActionSheet
// Dependencies: [4099, 10962, 1935, 2]
// Exports: default

// Module 10961 (showModerateUserActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(10962, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
