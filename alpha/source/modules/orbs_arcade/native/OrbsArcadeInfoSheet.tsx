// Module ID: 17044
// Function ID: 17045
// Name: OrbsArcadeInfoSheet
// Dependencies: [19, 17010, 21, 504, 10837, 17030, 1113, 17031, 2]
// Exports: default

// Module 17044 (OrbsArcadeInfoSheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 17030 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17031 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
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
    const PromoSheet = tmp(10837).PromoSheet;
    if (null != asset) {
      const obj2 = { asset };
      tmp8Result = tmp8(OrbsArcadeGameGraphicDefault, obj2);
    }
    const intl = tmp(1113).intl;
    const intl2 = tmp(1113).intl;
    ({ game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", secondaryAction: gameId(17031).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    return <PromoSheet gradientColor="blue" illustration={tmp8Result} title={intl.string(gameId(1113).t["3AT3DL"])} description={intl2.string(gameId(1113).t.GSj8gp)} actions={null} />;
  }
};
