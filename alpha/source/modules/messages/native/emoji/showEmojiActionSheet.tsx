// Module ID: 11992
// Function ID: 11993
// Name: showEmojiActionSheet
// Dependencies: [5131, 9614, 2119, 2]
// Exports: default

// Module 11992 (showEmojiActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { emojiNode };
  obj.openLazy(asyncRequire(9614, dependencyMap.paths), "MessageEmojiActionSheet", obj2);
};
