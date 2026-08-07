// Module ID: 9896
// Function ID: 9897
// Name: searchAllStickers
// Dependencies: [5158, 5892, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9896 (searchAllStickers)
const result = require("set").fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(5158);
  return importDefault(5158).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5158);
  return importDefault(5158).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(table[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5158);
  return importDefault(5158).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
