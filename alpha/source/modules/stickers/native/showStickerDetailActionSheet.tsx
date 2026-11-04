// Module ID: 10464
// Function ID: 10465
// Name: showStickerDetailActionSheet
// Dependencies: [5382, 10465, 2123, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10464 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10465, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
