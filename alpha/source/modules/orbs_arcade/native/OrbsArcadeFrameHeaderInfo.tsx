// Module ID: 18885
// Function ID: 18886
// Name: OrbsArcadeFrameHeaderInfo
// Dependencies: [19, 17, 2043, 16900, 21, 5005, 587, 5287, 558, 576, 504, 9513, 5271, 14416, 2]

// Module 18885 (OrbsArcadeFrameHeaderInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ButtonConstants from "ButtonConstants" /* 5287 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16900 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, namePill: obj3, nameText: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFrameHeaderInfo(gameId) {
  let applicationId;
  let first;
  let heldRunChargeTotal;
  let items2;
  let obj5;
  const obj = gameId(applicationId[9]);
  const cResult = obj.c(17);
  gameId = gameId.gameId;
  applicationId = gameId.applicationId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore, ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationId) {
    let tmp8;
    let tmp9;
    if (cResult[2] === gameId) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = gameId(applicationId[10]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
    const tmpResult3 = gameId(applicationId[11]);
    const balance = tmpResult3.useFetchVirtualCurrencyBalance().balance;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [OrbsArcadeStore];
      class C {
        constructor() {
          return heldRunChargeTotal.heldRunChargeTotal;
        }
      }
      cResult[5] = items1;
      cResult[6] = C;
    }
    gameId(applicationId[10]);
    let bound = null;
    if (null != balance) {
      const _Math = Math;
      bound = Math.max(balance - tmp15, 0);
    }
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === tmp4.namePill) {
        let tmp18;
        let tmp22;
        if (cResult[9] === tmp4.nameText) {
          tmp18 = cResult[10];
        }
        if (cResult[11] !== bound) {
          class C {
            constructor() {
              return heldRunChargeTotal.heldRunChargeTotal;
            }
          }
          cResult[11] = bound;
          cResult[12] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp18) {
            let tmp25;
            if (cResult[15] === tmp22) {
              tmp25 = cResult[16];
            }
            return tmp25;
          }
        }
        class C {
          constructor() {
            return heldRunChargeTotal.heldRunChargeTotal;
          }
        }
        const obj3 = { style: tmp4.container, children: items2 };
        items2 = [tmp18, tmp22];
        const tmp27 = closure_7(View, obj3);
        cResult[13] = tmp4.container;
        cResult[14] = tmp18;
        cResult[15] = tmp22;
        cResult[16] = tmp27;
        tmp25 = tmp27;
      }
    }
    let tmp19 = null;
    if (null != stateFromStores) {
      tmp19 = null;
      if ("" !== stateFromStores) {
        const obj4 = { style: null, children: closure_6(gameId(applicationId[12]).Text, obj5) };
        class C {
          constructor() {
            return heldRunChargeTotal.heldRunChargeTotal;
          }
        }
        obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp4.nameText, children: stateFromStores };
        tmp19 = closure_6(View, obj4);
      }
    }
    cResult[7] = stateFromStores;
    cResult[8] = tmp4.namePill;
    cResult[9] = tmp4.nameText;
    cResult[10] = tmp19;
    tmp18 = tmp19;
  }
  const fn = function p() {
    const game = OrbsArcadeStore.getGame(gameId);
    let name;
    if (game != null) {
      name = game.name;
    }
    if (name == null) {
      const application = ApplicationStore.getApplication(applicationId);
      let name1;
      if (application != null) {
        name1 = application.name;
      }
      name = name1;
    }
    return name;
  };
  const items3 = [gameId, applicationId];
  cResult[1] = applicationId;
  cResult[2] = gameId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp9 = items3;
  tmp8 = fn;
}) : (function OrbsArcadeFrameHeaderInfo(gameId) {
  let heldRunChargeTotal;
  let items4;
  let obj6;
  gameId = gameId.gameId;
  const applicationId = gameId.applicationId;
  const tmp = closure_8();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [gameId, applicationId];
  const obj = gameId(applicationId[10]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const game = OrbsArcadeStore.getGame(gameId);
    let name;
    if (game != null) {
      name = game.name;
    }
    if (name == null) {
      const application = ApplicationStore.getApplication(applicationId);
      let name1;
      if (application != null) {
        name1 = application.name;
      }
      name = name1;
    }
    return name;
  }, items1);
  const obj2 = gameId(applicationId[11]);
  const balance = obj2.useFetchVirtualCurrencyBalance().balance;
  const items2 = [OrbsArcadeStore];
  const obj3 = gameId(applicationId[10]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => heldRunChargeTotal.heldRunChargeTotal);
  const items3 = [balance, stateFromStores1];
  let tmp9 = null;
  const obj4 = { style: tmp.container, children: items4 };
  const memo = balance.useMemo(() => {
    let bound = null;
    if (null != balance) {
      const _Math = Math;
      bound = Math.max(tmp - stateFromStores1, 0);
    }
    return bound;
  }, items3);
  const tmp7 = closure_7;
  if (null != stateFromStores) {
    tmp9 = null;
    if ("" !== stateFromStores) {
      const obj5 = { style: tmp.namePill, children: closure_6(gameId(applicationId[12]).Text, obj6) };
      obj6 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp.nameText, children: stateFromStores };
      tmp9 = closure_6(tmp8, obj5);
    }
  }
  items4 = [tmp9, closure_6(gameId(tmp3[13]).BalanceWidgetPill, { balance: memo })];
  return tmp7(stateFromStores1, obj4);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default tmp4;
