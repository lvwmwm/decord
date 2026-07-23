// Module ID: 10340
// Function ID: 79819
// Name: showLongPressForumPostActionSheet
// Dependencies: [4098, 10341, 1934, 2]
// Exports: default

// Module 10340 (showLongPressForumPostActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4098).hideActionSheet;
  }
  let obj = importDefault(4098);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1934) /* maybeLoadBundle */(10341, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
