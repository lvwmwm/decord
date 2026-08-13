// Module ID: 9945
// Function ID: 9946
// Name: showLongPressForumPostActionSheet
// Dependencies: [4310, 9946, 2007, 2]
// Exports: default

// Module 9945 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4310).hideActionSheet;
  }
  let obj = importDefault(4310);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9946, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
