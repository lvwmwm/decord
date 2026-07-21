// Module ID: 9598
// Function ID: 74789
// Name: searchAllStickers
// Dependencies: []
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9598 (searchAllStickers)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = importDefault(dependencyMap[0]);
  return importDefault(dependencyMap[0]).queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === callback(closure_2[1]).StickerSendability.SENDABLE];
  const obj = importDefault(dependencyMap[0]);
  return importDefault(dependencyMap[0]).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== callback(closure_2[1]).StickerSendability.SENDABLE];
  const obj = importDefault(dependencyMap[0]);
  return importDefault(dependencyMap[0]).queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
