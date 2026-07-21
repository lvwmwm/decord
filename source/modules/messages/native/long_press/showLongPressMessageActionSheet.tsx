// Module ID: 9521
// Function ID: 74127
// Name: showLongPressMessageActionSheet
// Dependencies: []
// Exports: showLongPressMessageActionSheet

// Module 9521 (showLongPressMessageActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
