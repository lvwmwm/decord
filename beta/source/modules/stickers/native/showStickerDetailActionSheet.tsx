// Module ID: 10405
// Function ID: 10406
// Name: showStickerDetailActionSheet
// Dependencies: [5374, 10406, 2118, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10405 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10406, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
