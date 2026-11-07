// Module ID: 11822
// Function ID: 11823
// Name: showEmojiActionSheet
// Dependencies: [5374, 10172, 2118, 2]
// Exports: default

// Module 11822 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(10172, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
