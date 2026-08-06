// Module ID: 9818
// Function ID: 9819
// Name: showLongPressForumPostActionSheet
// Dependencies: [4253, 9819, 1988, 2]
// Exports: default

// Module 9818 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4253).hideActionSheet;
  }
  let obj = importDefault(4253);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1988) /* asyncRequireImpl */(9819, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
