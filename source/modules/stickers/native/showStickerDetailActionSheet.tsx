// Module ID: 9888
// Function ID: 9889
// Name: hideStickerDetailActionSheet
// Dependencies: [4253, 9889, 1959, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 9888 (hideStickerDetailActionSheet)
const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  importDefault(4253).hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(9889, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
