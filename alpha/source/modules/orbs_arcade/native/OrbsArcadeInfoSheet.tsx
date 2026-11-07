// Module ID: 17361
// Function ID: 17362
// Name: OrbsArcadeInfoSheet
// Dependencies: [19, 17330, 21, 504, 10956, 17343, 1113, 17344, 17340, 2]
// Exports: default

// Module 17361 (OrbsArcadeInfoSheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 17343 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17344 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17330 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default function OrbsArcadeInfoSheet(gameId) {
  gameId = gameId.gameId;
  const surface = gameId.surface;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const asset = stateFromStores.asset;
    let tmp8Result;
    const PromoSheet = tmp(10956).PromoSheet;
    if (null != asset) {
      const obj2 = { asset };
      tmp8Result = tmp8(OrbsArcadeGameGraphicDefault, obj2);
    }
    const intl = tmp(1113).intl;
    const intl2 = tmp(1113).intl;
    ({ game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: gameId(17340).OrbsArcadeCtaLocation.INFO_SHEET, surface, secondaryAction: gameId(17344).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    return <PromoSheet gradientColor="blue" illustration={tmp8Result} title={intl.string(gameId(1113).t["3AT3DL"])} description={intl2.string(gameId(1113).t.GSj8gp)} actions={null} />;
  }
};
