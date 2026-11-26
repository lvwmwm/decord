// Module ID: 12141
// Function ID: 12142
// Name: showEmojiActionSheet
// Dependencies: [5257, 9755, 2120, 2]
// Exports: default

// Module 12141 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(9755, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
