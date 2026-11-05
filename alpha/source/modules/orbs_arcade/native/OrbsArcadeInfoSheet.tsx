// Module ID: 17325
// Function ID: 17326
// Name: OrbsArcadeInfoSheet
// Dependencies: [19, 17294, 21, 504, 11021, 17307, 1113, 17308, 17304, 2]
// Exports: default

// Module 17325 (OrbsArcadeInfoSheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 17307 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 17308 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17294 */;
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
    const PromoSheet = tmp(11021).PromoSheet;
    if (null != asset) {
      const obj2 = { asset };
      tmp8Result = tmp8(OrbsArcadeGameGraphicDefault, obj2);
    }
    const intl = tmp(1113).intl;
    const intl2 = tmp(1113).intl;
    ({ game: stateFromStores, sheetKey: "OrbsArcadeInfoSheet", location: gameId(17304).OrbsArcadeCtaLocation.INFO_SHEET, surface, secondaryAction: gameId(17308).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    return <PromoSheet gradientColor="blue" illustration={tmp8Result} title={intl.string(gameId(1113).t["3AT3DL"])} description={intl2.string(gameId(1113).t.GSj8gp)} actions={null} />;
  }
};
