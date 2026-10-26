// Module ID: 10174
// Function ID: 10175
// Name: showStickerDetailActionSheet
// Dependencies: [5210, 10175, 2002, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10174 (showStickerDetailActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10175, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
