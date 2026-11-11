// Module ID: 17563
// Function ID: 17564
// Name: OrbsArcadeInfoSheet
// Dependencies: [19, 17534, 21, 504, 10651, 17564, 1113, 17554, 17544, 2]
// Exports: default

// Module 17563 (OrbsArcadeInfoSheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17554 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 17564 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17534 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default function OrbsArcadeInfoSheet(gameId) {
  let intl;
  let intl2;
  gameId = gameId.gameId;
  const surface = gameId.surface;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  let tmp5Result2 = null;
  if (null != stateFromStores) {
    const PromoSheet = tmp(10651).PromoSheet;
    let tmp5Result;
    const tmpResult = gameId(17564);
    if (tmpResult.hasOrbsArcadeGameGraphic(stateFromStores)) {
      const obj2 = { game: stateFromStores };
      tmp5Result = tmp5(OrbsArcadeGameGraphicDefault, obj2);
    }
    const obj3 = { gradientColor: "blue", illustration: tmp5Result, title: intl.string(gameId(1113).t["3AT3DL"]), description: intl2.string(gameId(1113).t.GSj8gp), actions: null };
    intl = tmp(1113).intl;
    intl2 = tmp(1113).intl;
    ({ game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: gameId(17544).OrbsArcadeCtaLocation.INFO_SHEET, surface, secondaryAction: gameId(17554).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    tmp5Result2 = tmp5(PromoSheet, obj3);
  }
  return tmp5Result2;
};
