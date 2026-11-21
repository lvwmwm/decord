// Module ID: 16452
// Function ID: 16453
// Name: OrbsArcadeInfoSheet
// Dependencies: [19, 16423, 21, 504, 11225, 16453, 1112, 16443, 16433, 2]
// Exports: default

// Module 16452 (OrbsArcadeInfoSheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16443 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 16453 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16423 */;
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
    const PromoSheet = tmp(11225).PromoSheet;
    let tmp5Result;
    const tmpResult = gameId(16453);
    if (tmpResult.hasOrbsArcadeGameGraphic(stateFromStores)) {
      const obj2 = { game: stateFromStores };
      tmp5Result = tmp5(OrbsArcadeGameGraphicDefault, obj2);
    }
    const obj3 = { gradientColor: "blue", illustration: tmp5Result, title: intl.string(gameId(1112).t["3AT3DL"]), description: intl2.string(gameId(1112).t.GSj8gp), actions: null };
    intl = tmp(1112).intl;
    intl2 = tmp(1112).intl;
    ({ game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: gameId(16433).OrbsArcadeCtaLocation.INFO_SHEET, surface, secondaryAction: gameId(16443).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    tmp5Result2 = tmp5(PromoSheet, obj3);
  }
  return tmp5Result2;
};
