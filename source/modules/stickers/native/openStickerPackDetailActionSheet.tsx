// Module ID: 10019
// Function ID: 10020
// Name: openStickerPackDetailActionSheet
// Dependencies: [676, 698, 4310, 10020, 2007, 2]
// Exports: default

// Module 10019 (openStickerPackDetailActionSheet)
import { AnalyticEvents } from "ME";

const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/stickers/native/openStickerPackDetailActionSheet.tsx");

export default function openStickerPackDetailActionSheet(stickerPack) {
  let analyticsLocation;
  let analyticsPopoutType;
  stickerPack = stickerPack.stickerPack;
  ({ analyticsLocation, analyticsPopoutType } = stickerPack);
  let obj = importDefault(698);
  obj = { location: analyticsLocation, sticker_pack_id: stickerPack.id };
  obj.track(AnalyticEvents.STICKER_PACK_VIEW_ALL, obj);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(10020, dependencyMap.paths), "StickerPackDetailActionSheet", { stickerPack, analyticsPopoutType });
};
export const AnalyticsPopoutType = { EXPRESSION_SUGGESTIONS: "Sticker Pack Detail Sheet (Expression Suggestions Popout)", STICKER_PACK_DETAIL: "Sticker Pack Detail Sheet", STICKER_PACK_UPSELL: "Sticker Pack Detail Sheet (Sticker Upsell Popout)" };
