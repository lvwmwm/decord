// Module ID: 9901
// Function ID: 9902
// Name: showLongPressForumPostActionSheet
// Dependencies: [4271, 9902, 1988, 2]
// Exports: default

// Module 9901 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4271).hideActionSheet;
  }
  let obj = importDefault(4271);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1988) /* asyncRequireImpl */(9902, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
