// Module ID: 16426
// Function ID: 16427
// Name: OrbsArcadeInfoSheet
// Dependencies: [19, 16395, 21, 558, 576, 504, 16413, 1128, 16414, 10853, 2]

// Module 16426 (OrbsArcadeInfoSheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 16413 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16414 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16395 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const OrbsArcadeInfoSheet_str = "OrbsArcadeInfoSheet";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeInfoSheet(gameId) {
  let first;
  let tmp6;
  let tmp7;
  const obj = gameId(576);
  const cResult = obj.c(13);
  gameId = gameId.gameId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== gameId) {
    const fn = function l() {
      return OrbsArcadeStore.getGame(gameId);
    };
    const items1 = [gameId];
    cResult[1] = gameId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = gameId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp9;
    let tmp14;
    let tmp13;
    let tmp17;
    const asset = stateFromStores.asset;
    if (cResult[4] !== asset) {
      let tmp10;
      if (null != asset) {
        tmp10 = jsx(OrbsArcadeGameGraphicDefault, { asset });
      }
      cResult[4] = asset;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(gameId(1128).t["3AT3DL"]);
      const intl2 = tmp(1128).intl;
      const stringResult1 = intl2.string(gameId(1128).t.GSj8gp);
      cResult[6] = stringResult;
      cResult[7] = stringResult1;
      tmp14 = stringResult1;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    if (cResult[8] !== stateFromStores) {
      OrbsArcadeSheetActionsDefault;
      const tmp22 = <tmp20 game={stateFromStores} sheetKey={OrbsArcadeInfoSheet_str} secondaryAction={gameId(16414).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY} direction="vertical" />;
      cResult[8] = stateFromStores;
      cResult[9] = tmp22;
      tmp17 = tmp22;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp9) {
      let tmp23;
      if (cResult[11] === tmp17) {
        tmp23 = cResult[12];
      }
      return tmp23;
    }
    const tmp25 = jsx(gameId(10853).PromoSheet, { illustration: tmp9, title: tmp13, description: tmp14, actions: tmp17 });
    cResult[10] = tmp9;
    cResult[11] = tmp17;
    cResult[12] = tmp25;
    tmp23 = tmp25;
  }
}) : (function OrbsArcadeInfoSheet(gameId) {
  gameId = gameId.gameId;
  const items = [OrbsArcadeStore];
  const items1 = [gameId];
  const obj = gameId(504);
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGame(gameId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const asset = stateFromStores.asset;
    let tmp9Result;
    const PromoSheet = tmp(10853).PromoSheet;
    if (null != asset) {
      const obj2 = { asset };
      tmp9Result = tmp9(OrbsArcadeGameGraphicDefault, obj2);
    }
    const intl = tmp(1128).intl;
    const intl2 = tmp(1128).intl;
    ({ game: stateFromStores, sheetKey: OrbsArcadeInfoSheet_str, secondaryAction: gameId(16414).OrbsArcadeSheetSecondaryAction.HOW_TO_PLAY, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    return <PromoSheet illustration={tmp9Result} title={intl.string(gameId(1128).t["3AT3DL"])} description={intl2.string(gameId(1128).t.GSj8gp)} actions={null} />;
  }
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeInfoSheet.tsx");

export default tmp3;
