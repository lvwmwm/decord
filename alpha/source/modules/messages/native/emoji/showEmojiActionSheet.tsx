// Module ID: 12769
// Function ID: 12770
// Name: showEmojiActionSheet
// Dependencies: [5546, 11997, 2121, 2]
// Exports: default

// Module 12769 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(11997, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
