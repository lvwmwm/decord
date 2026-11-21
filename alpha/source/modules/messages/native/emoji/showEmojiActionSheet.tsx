// Module ID: 12102
// Function ID: 12103
// Name: showEmojiActionSheet
// Dependencies: [5127, 11319, 2119, 2]
// Exports: default

// Module 12102 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11319, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
