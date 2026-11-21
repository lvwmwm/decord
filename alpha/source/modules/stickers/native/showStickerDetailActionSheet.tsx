// Module ID: 11385
// Function ID: 11386
// Name: showStickerDetailActionSheet
// Dependencies: [5127, 11386, 2119, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 11385 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11386, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
