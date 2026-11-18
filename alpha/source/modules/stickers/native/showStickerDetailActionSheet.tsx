// Module ID: 11345
// Function ID: 11346
// Name: showStickerDetailActionSheet
// Dependencies: [5037, 11346, 2121, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 11345 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11346, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
