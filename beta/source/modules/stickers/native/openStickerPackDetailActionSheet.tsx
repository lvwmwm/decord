// Module ID: 10686
// Function ID: 10687
// Name: openStickerPackDetailActionSheet
// Dependencies: [1078, 1245, 4725, 10687, 1984, 2]
// Exports: default

// Module 10686 (openStickerPackDetailActionSheet)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/stickers/native/openStickerPackDetailActionSheet.tsx");

export default function openStickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ analyticsLocation, analyticsPopoutType } = stickerPack);
  AnalyticsUtilsDefault.track(AnalyticEvents.STICKER_PACK_VIEW_ALL, { location: analyticsLocation, sticker_pack_id: stickerPack.id });
  const obj2 = { location: analyticsLocation, sticker_pack_id: stickerPack.id };
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10687, dependencyMap.paths), "StickerPackDetailActionSheet", { stickerPack, analyticsPopoutType });
};
export const AnalyticsPopoutType = { EXPRESSION_SUGGESTIONS: "Sticker Pack Detail Sheet (Expression Suggestions Popout)", STICKER_PACK_DETAIL: "Sticker Pack Detail Sheet", STICKER_PACK_UPSELL: "Sticker Pack Detail Sheet (Sticker Upsell Popout)" };
