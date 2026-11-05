// Module ID: 10458
// Function ID: 10459
// Name: openStickerPackDetailActionSheet
// Dependencies: [1072, 1252, 5384, 10459, 2123, 2]
// Exports: default

// Module 10458 (openStickerPackDetailActionSheet)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/stickers/native/openStickerPackDetailActionSheet.tsx");

export default function openStickerPackDetailActionSheet(stickerPack) {
  let analyticsLocation;
  let analyticsPopoutType;
  stickerPack = stickerPack.stickerPack;
  ({ analyticsLocation, analyticsPopoutType } = stickerPack);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { location: analyticsLocation, sticker_pack_id: stickerPack.id };
  obj.track(AnalyticEvents.STICKER_PACK_VIEW_ALL, obj2);
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequire(10459, dependencyMap.paths), "StickerPackDetailActionSheet", { stickerPack, analyticsPopoutType });
};
export const AnalyticsPopoutType = { EXPRESSION_SUGGESTIONS: "Sticker Pack Detail Sheet (Expression Suggestions Popout)", STICKER_PACK_DETAIL: "Sticker Pack Detail Sheet", STICKER_PACK_UPSELL: "Sticker Pack Detail Sheet (Sticker Upsell Popout)" };
