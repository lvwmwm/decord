// Module ID: 9983
// Function ID: 9984
// Name: StickersSearchUtils
// Dependencies: [6186, 7268, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 9983 (StickersSearchUtils)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6186 */;
import StickerSendability from "StickerSendability" /* 7268 */;
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
