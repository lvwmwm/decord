// Module ID: 9816
// Function ID: 9817
// Name: showLongPressForumPostActionSheet
// Dependencies: [4253, 9817, 1959, 2]
// Exports: default

// Module 9816 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4253).hideActionSheet;
  }
  let obj = importDefault(4253);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1959) /* asyncRequireImpl */(9817, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
