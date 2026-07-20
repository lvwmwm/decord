// Module ID: 10962
// Function ID: 85283
// Name: showModerateUserActionSheet
// Dependencies: []
// Exports: default

// Module 10962 (showModerateUserActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
