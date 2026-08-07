// Module ID: 9834
// Function ID: 9835
// Name: showLongPressForumPostActionSheet
// Dependencies: [4270, 9835, 1988, 2]
// Exports: default

// Module 9834 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4270).hideActionSheet;
  }
  let obj = importDefault(4270);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1988) /* asyncRequireImpl */(9835, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
