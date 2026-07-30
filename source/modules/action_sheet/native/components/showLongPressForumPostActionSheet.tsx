// Module ID: 10360
// Function ID: 10361
// Name: showLongPressForumPostActionSheet
// Dependencies: [4157, 10361, 1959, 2]
// Exports: default

// Module 10360 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4157).hideActionSheet;
  }
  let obj = importDefault(4157);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10361, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
