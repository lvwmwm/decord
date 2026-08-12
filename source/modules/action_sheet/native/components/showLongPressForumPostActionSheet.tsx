// Module ID: 9947
// Function ID: 9948
// Name: showLongPressForumPostActionSheet
// Dependencies: [4312, 9948, 2007, 2]
// Exports: default

// Module 9947 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4312).hideActionSheet;
  }
  let obj = importDefault(4312);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9948, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
