// Module ID: 9878
// Function ID: 9879
// Name: searchAllStickers
// Dependencies: [5126, 5861, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9878 (searchAllStickers)
const result = require("set").fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(5126);
  return importDefault(5126).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5126);
  return importDefault(5126).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5126);
  return importDefault(5126).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
