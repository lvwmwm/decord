// Module ID: 9773
// Function ID: 9774
// Name: showStickerDetailActionSheet
// Dependencies: [5056, 9774, 2000, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9773 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9774, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
