// Module ID: 16972
// Function ID: 16973
// Name: OrbsArcadeHowToPlaySheet
// Dependencies: [19, 16954, 21, 504, 10817, 16973, 1114, 16974, 2]
// Exports: default

// Module 16972 (OrbsArcadeHowToPlaySheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 16973 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16974 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeHowToPlaySheet.tsx");

export default function OrbsArcadeHowToPlaySheet(gameId) {
  let intl;
  let str;
  gameId = gameId.gameId;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  let tmp5Result2 = null;
  if (null != stateFromStores) {
    let tmp5Result;
    const PromoSheet = tmp(10817).PromoSheet;
    if (null != stateFromStores.asset) {
      const obj2 = { asset: stateFromStores.asset };
      tmp5Result = tmp5(OrbsArcadeGameGraphicDefault, obj2);
    }
    const obj3 = { illustration: tmp5Result, title: intl.string(gameId(1114).t["uz4M/z"]), description: str, actions: null };
    intl = tmp(1114).intl;
    str = stateFromStores.instructions;
    if (str == null) {
      str = "";
    }
    ({ game: stateFromStores, sheetKey: "OrbsArcadeHowToPlaySheet", secondaryAction: gameId(16974).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    tmp5Result2 = tmp5(PromoSheet, obj3);
  }
  return tmp5Result2;
};
