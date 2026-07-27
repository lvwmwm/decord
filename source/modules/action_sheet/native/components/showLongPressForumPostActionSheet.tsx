// Module ID: 10303
// Function ID: 79669
// Name: showLongPressForumPostActionSheet
// Dependencies: [4099, 10304, 1935, 2]
// Exports: default

// Module 10303 (showLongPressForumPostActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4099).hideActionSheet;
  }
  let obj = importDefault(4099);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1935) /* maybeLoadBundle */(10304, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
