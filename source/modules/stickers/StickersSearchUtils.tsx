// Module ID: 9968
// Function ID: 9969
// Name: searchAllStickers
// Dependencies: [5159, 5954, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9968 (searchAllStickers)
const result = require("set").fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(5159);
  return importDefault(5159).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5159);
  return importDefault(5159).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5159);
  return importDefault(5159).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
