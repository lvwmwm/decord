// Module ID: 9639
// Function ID: 9640
// Name: hideStickerDetailActionSheet
// Dependencies: [4157, 9640, 1959, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9639 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4157).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(9640, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
