// Module ID: 10320
// Function ID: 79698
// Name: showLongPressForumPostActionSheet
// Dependencies: []
// Exports: default

// Module 10320 (showLongPressForumPostActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(dependencyMap[0]).hideActionSheet;
  }
  let obj = importDefault(dependencyMap[0]);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
