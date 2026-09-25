// Module ID: 9854
// Function ID: 9855
// Name: showStickerDetailActionSheet
// Dependencies: [4796, 9855, 1980, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9854 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9855, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
