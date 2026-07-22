// Module ID: 10968
// Function ID: 85328
// Name: showModerateUserActionSheet
// Dependencies: []
// Exports: default

// Module 10968 (showModerateUserActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
