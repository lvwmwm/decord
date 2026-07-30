// Module ID: 9636
// Function ID: 9637
// Name: hideStickerDetailActionSheet
// Dependencies: [4157, 9637, 1959, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9636 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4157).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(9637, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
