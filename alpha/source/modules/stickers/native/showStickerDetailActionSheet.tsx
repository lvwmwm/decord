// Module ID: 10266
// Function ID: 10267
// Name: showStickerDetailActionSheet
// Dependencies: [5253, 10267, 1995, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10266 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
}
export function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10267, dependencyMap.paths), sticker_detail_action_sheet, arg0);
}
