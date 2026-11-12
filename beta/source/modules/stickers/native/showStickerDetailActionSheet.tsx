// Module ID: 10437
// Function ID: 10438
// Name: showStickerDetailActionSheet
// Dependencies: [5406, 10438, 2118, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10437 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10438, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
