// Module ID: 16986
// Function ID: 16987
// Name: OrbsArcadeInfoSheet
// Dependencies: [19, 16954, 21, 504, 10817, 16973, 1114, 16974, 2]
// Exports: default

// Module 16986 (OrbsArcadeInfoSheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 16973 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16974 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default function OrbsArcadeInfoSheet(gameId) {
  gameId = gameId.gameId;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const asset = stateFromStores.asset;
    let tmp8Result;
    const PromoSheet = tmp(10817).PromoSheet;
    if (null != asset) {
      const obj2 = { asset };
      tmp8Result = tmp8(OrbsArcadeGameGraphicDefault, obj2);
    }
    const intl = tmp(1114).intl;
    const intl2 = tmp(1114).intl;
    ({ game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", secondaryAction: gameId(16974).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    return <PromoSheet illustration={tmp8Result} title={intl.string(gameId(1114).t["3AT3DL"])} description={intl2.string(gameId(1114).t.GSj8gp)} actions={null} />;
  }
};
