// Module ID: 17713
// Function ID: 17714
// Name: showEmojiOverflowActionSheet
// Dependencies: [4854, 17714, 1987, 2]
// Exports: default

// Module 17713 (showEmojiOverflowActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
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
  const tmp2 = asyncRequire(17714, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp2, "EmojiOverflowActionSheet", obj);
};
