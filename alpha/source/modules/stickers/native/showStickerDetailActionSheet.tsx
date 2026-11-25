// Module ID: 10802
// Function ID: 10803
// Name: showStickerDetailActionSheet
// Dependencies: [5226, 10803, 2119, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10802 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10803, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
