// Module ID: 10369
// Function ID: 80011
// Name: showLongPressForumPostActionSheet
// Dependencies: [4098, 10370, 1934, 2]
// Exports: default

// Module 10369 (showLongPressForumPostActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4098).hideActionSheet;
  }
  let obj = importDefault(4098);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1934) /* maybeLoadBundle */(10370, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
