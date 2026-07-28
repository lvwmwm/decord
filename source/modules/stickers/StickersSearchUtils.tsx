// Module ID: 9604
// Function ID: 74785
// Name: searchAllStickers
// Dependencies: [5009, 9599, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9604 (searchAllStickers)
const result = require("set").fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(5009);
  return importDefault(5009).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === outer1_0(outer1_2[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5009);
  return importDefault(5009).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== outer1_0(outer1_2[1]).StickerSendability.SENDABLE];
  const obj = importDefault(5009);
  return importDefault(5009).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
