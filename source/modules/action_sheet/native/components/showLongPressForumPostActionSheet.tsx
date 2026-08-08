// Module ID: 9900
// Function ID: 9901
// Name: showLongPressForumPostActionSheet
// Dependencies: [4271, 9901, 1988, 2]
// Exports: default

// Module 9900 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4271).hideActionSheet;
  }
  let obj = importDefault(4271);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1988) /* asyncRequireImpl */(9901, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
