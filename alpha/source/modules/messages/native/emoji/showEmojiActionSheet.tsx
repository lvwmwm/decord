// Module ID: 12478
// Function ID: 12479
// Name: showEmojiActionSheet
// Dependencies: [5489, 11232, 2118, 2]
// Exports: default

// Module 12478 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11232, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
