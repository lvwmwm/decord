// Module ID: 18362
// Function ID: 18363
// Name: showEmojiOverflowActionSheet
// Dependencies: [5056, 18363, 2000, 2]
// Exports: default

// Module 18362 (showEmojiOverflowActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  let obj = {
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(18363, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp2, "EmojiOverflowActionSheet", obj);
};
