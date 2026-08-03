// Module ID: 9798
// Function ID: 9799
// Name: hideStickerDetailActionSheet
// Dependencies: [4223, 9799, 1959, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9798 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4223).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(9799, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
