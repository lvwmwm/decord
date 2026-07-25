// Module ID: 10960
// Function ID: 85182
// Name: showModerateUserActionSheet
// Dependencies: [4099, 10961, 1935, 2]
// Exports: default

// Module 10960 (showModerateUserActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(10961, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
