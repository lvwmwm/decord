// Module ID: 9956
// Function ID: 9957
// Name: showLongPressForumPostActionSheet
// Dependencies: [4310, 9957, 2007, 2]
// Exports: default

// Module 9956 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4310).hideActionSheet;
  }
  let obj = importDefault(4310);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9957, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
