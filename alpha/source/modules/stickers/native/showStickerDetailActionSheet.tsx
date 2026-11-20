// Module ID: 11265
// Function ID: 11266
// Name: showStickerDetailActionSheet
// Dependencies: [5008, 11266, 2119, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 11265 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11266, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
