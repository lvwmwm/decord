// Module ID: 17590
// Function ID: 17591
// Name: showEmojiOverflowActionSheet
// Dependencies: [4830, 17591, 1981, 2]
// Exports: default

// Module 17590 (showEmojiOverflowActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    onClose() {
      return ActionSheetActionCreatorsDefault.hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(17591, dependencyMap.paths), "EmojiOverflowActionSheet", obj2);
};
