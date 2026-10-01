// Module ID: 9865
// Function ID: 9866
// Name: showStickerDetailActionSheet
// Dependencies: [4800, 9866, 1981, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9865 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9866, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
