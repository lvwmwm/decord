// Module ID: 17353
// Function ID: 17354
// Name: OrbsArcadeHowToPlaySheet
// Dependencies: [19, 17341, 21, 504, 10956, 17354, 1113, 17355, 17351, 2]
// Exports: default

// Module 17353 (OrbsArcadeHowToPlaySheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 17354 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17355 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17341 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeHowToPlaySheet.tsx");

export default function OrbsArcadeHowToPlaySheet(gameId) {
  let intl;
  let str;
  gameId = gameId.gameId;
  const surface = gameId.surface;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  let tmp5Result2 = null;
  if (null != stateFromStores) {
    let tmp5Result;
    const PromoSheet = tmp(10956).PromoSheet;
    if (null != stateFromStores.asset) {
      const obj2 = { asset: stateFromStores.asset };
      tmp5Result = tmp5(OrbsArcadeGameGraphicDefault, obj2);
    }
    const obj3 = { illustration: tmp5Result, title: intl.string(gameId(1113).t["uz4M/z"]), description: str, gradientColor: "blue", actions: null };
    intl = tmp(1113).intl;
    str = stateFromStores.instructions;
    if (str == null) {
      str = "";
    }
    ({ game: stateFromStores, sheetKey: "OrbsArcadeHowToPlaySheet", location: gameId(17351).OrbsArcadeCtaLocation.HOW_TO_PLAY_SHEET, surface, secondaryAction: gameId(17355).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    tmp5Result2 = tmp5(PromoSheet, obj3);
  }
  return tmp5Result2;
};
