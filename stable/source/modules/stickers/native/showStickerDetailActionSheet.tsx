// Module ID: 10532
// Function ID: 10533
// Name: showStickerDetailActionSheet
// Dependencies: [4603, 10533, 1896, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10532 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10533, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
