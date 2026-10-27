// Module ID: 16412
// Function ID: 16413
// Name: OrbsArcadeHowToPlaySheet
// Dependencies: [19, 16395, 21, 558, 576, 504, 16413, 1128, 16414, 10856, 2]

// Module 16412 (OrbsArcadeHowToPlaySheet)
import Fragment from "Fragment" /* 21 */;
import OrbsArcadeGameGraphicDefault from "OrbsArcadeGameGraphic" /* 16413 */;
import OrbsArcadeSheetActionsDefault from "OrbsArcadeSheetActions" /* 16414 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16395 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const OrbsArcadeHowToPlaySheet_str = "OrbsArcadeHowToPlaySheet";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeHowToPlaySheet(gameId) {
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
    let tmp13;
    let tmp15;
    if (cResult[4] !== stateFromStores.asset) {
      let tmp10;
      if (null != stateFromStores.asset) {
        tmp10 = jsx(OrbsArcadeGameGraphicDefault, { asset: stateFromStores.asset });
      }
      cResult[4] = stateFromStores.asset;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(gameId(1128).t["uz4M/z"]);
      cResult[6] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
    }
    let str = stateFromStores.instructions;
    if (str == null) {
      str = "";
    }
    if (cResult[7] !== stateFromStores) {
      OrbsArcadeSheetActionsDefault;
      const tmp20 = <tmp18 game={stateFromStores} sheetKey={OrbsArcadeHowToPlaySheet_str} secondaryAction={gameId(16414).OrbsArcadeSheetSecondaryAction.CLOSE} direction="vertical" />;
      cResult[7] = stateFromStores;
      cResult[8] = tmp20;
      tmp15 = tmp20;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp9) {
      if (cResult[10] === str) {
        let tmp21;
        if (cResult[11] === tmp15) {
          tmp21 = cResult[12];
        }
        return tmp21;
      }
    }
    const tmp23 = jsx(gameId(10856).PromoSheet, { illustration: tmp9, title: tmp13, description: str, actions: tmp15 });
    cResult[9] = tmp9;
    cResult[10] = str;
    cResult[11] = tmp15;
    cResult[12] = tmp23;
    tmp21 = tmp23;
  }
}) : (function OrbsArcadeHowToPlaySheet(gameId) {
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
    const PromoSheet = tmp(10856).PromoSheet;
    if (null != stateFromStores.asset) {
      const obj2 = { asset: stateFromStores.asset };
      tmp5Result = tmp5(OrbsArcadeGameGraphicDefault, obj2);
    }
    const obj3 = { illustration: tmp5Result, title: intl.string(gameId(1128).t["uz4M/z"]), description: str, actions: null };
    intl = tmp(1128).intl;
    str = stateFromStores.instructions;
    if (str == null) {
      str = "";
    }
    ({ game: stateFromStores, sheetKey: OrbsArcadeHowToPlaySheet_str, secondaryAction: gameId(16414).OrbsArcadeSheetSecondaryAction.CLOSE, direction: "vertical" });
    OrbsArcadeSheetActionsDefault;
    tmp5Result2 = tmp5(PromoSheet, obj3);
  }
  return tmp5Result2;
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeHowToPlaySheet.tsx");

export default tmp3;
