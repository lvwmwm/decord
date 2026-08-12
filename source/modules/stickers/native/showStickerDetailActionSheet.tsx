// Module ID: 10019
// Function ID: 10020
// Name: hideStickerDetailActionSheet
// Dependencies: [4312, 10020, 2007, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10019 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4312).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(10020, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
