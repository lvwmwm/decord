// Module ID: 10967
// Function ID: 85304
// Name: showModerateUserActionSheet
// Dependencies: []
// Exports: default

// Module 10967 (showModerateUserActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
