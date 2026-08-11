// Module ID: 9906
// Function ID: 9907
// Name: showLongPressForumPostActionSheet
// Dependencies: [4271, 9907, 2007, 2]
// Exports: default

// Module 9906 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4271).hideActionSheet;
  }
  let obj = importDefault(4271);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9907, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
