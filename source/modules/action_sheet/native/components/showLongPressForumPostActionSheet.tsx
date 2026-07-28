// Module ID: 10343
// Function ID: 79798
// Name: showLongPressForumPostActionSheet
// Dependencies: [4133, 10344, 1935, 2]
// Exports: default

// Module 10343 (showLongPressForumPostActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4133).hideActionSheet;
  }
  let obj = importDefault(4133);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1935) /* maybeLoadBundle */(10344, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
