// Module ID: 9972
// Function ID: 9973
// Name: hideStickerDetailActionSheet
// Dependencies: [4271, 9973, 1988, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9972 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4271).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(9973, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
