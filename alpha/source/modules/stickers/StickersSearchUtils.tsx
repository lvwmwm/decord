// Module ID: 9764
// Function ID: 9765
// Name: StickersSearchUtils
// Dependencies: [5970, 7046, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9764 (StickersSearchUtils)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5970 */;
import StickerSendability from "StickerSendability" /* 7046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true);
  return queryStickersResult.map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === StickerSendability.StickerSendability.SENDABLE];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true, items1);
  return queryStickersResult.map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== StickerSendability.StickerSendability.SENDABLE];
  const obj = AutocompleteUtilsDefault;
  const queryStickersResult = obj.queryStickers(items, true, items1);
  return queryStickersResult.map((sticker) => sticker.sticker);
};
