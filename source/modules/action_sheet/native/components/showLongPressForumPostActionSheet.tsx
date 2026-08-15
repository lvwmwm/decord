// Module ID: 10161
// Function ID: 10162
// Name: showLongPressForumPostActionSheet
// Dependencies: [4342, 10162, 2007, 2]
// Exports: default

// Module 10161 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4342).hideActionSheet;
  }
  let obj = importDefault(4342);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10162, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
