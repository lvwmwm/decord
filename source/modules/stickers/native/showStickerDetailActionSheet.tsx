// Module ID: 9978
// Function ID: 9979
// Name: hideStickerDetailActionSheet
// Dependencies: [4271, 9979, 2007, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9978 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4271).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(9979, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
