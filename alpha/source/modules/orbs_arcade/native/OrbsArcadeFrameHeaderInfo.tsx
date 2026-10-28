// Module ID: 18651
// Function ID: 18652
// Name: OrbsArcadeFrameHeaderInfo
// Dependencies: [19, 17, 2042, 16662, 21, 5004, 587, 5286, 558, 576, 504, 9482, 5270, 14183, 2]

// Module 18651 (OrbsArcadeFrameHeaderInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16662 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFrameHeaderInfo(applicationId) {
  let first;
  let heldRunChargeTotal;
  let items3;
  let obj5;
  let tmp8;
  let tmp9;
  const obj = applicationId(576);
  const cResult = obj.c(16);
  applicationId = applicationId.applicationId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore, ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const fn = function _() {
      const orbsArcadeGames = OrbsArcadeStore.orbsArcadeGames;
      const found = orbsArcadeGames.find((applicationId) => applicationId.applicationId === applicationId);
      let name;
      if (found != null) {
        name = found.name;
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
    const items1 = [applicationId];
    cResult[1] = applicationId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = applicationId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  const tmpResult3 = applicationId(9482);
  const balance = tmpResult3.useFetchVirtualCurrencyBalance().balance;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OrbsArcadeStore];
    const fn2 = function f() {
      return heldRunChargeTotal.heldRunChargeTotal;
    };
    cResult[4] = items2;
    cResult[5] = fn2;
  }
  applicationId(504);
  let bound = null;
  if (null != balance) {
    const _Math = Math;
    bound = Math.max(balance - tmp15, 0);
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === tmp4.namePill) {
      let tmp17;
      let tmp21;
      if (cResult[8] === tmp4.nameText) {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== bound) {
        const obj2 = { balance: bound };
        const tmp23 = closure_6(applicationId(14183).BalanceWidgetPill, obj2);
        cResult[10] = bound;
        cResult[11] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[11];
      }
      if (cResult[12] === tmp4.container) {
        if (cResult[13] === tmp17) {
          let tmp24;
          if (cResult[14] === tmp21) {
            tmp24 = cResult[15];
          }
          return tmp24;
        }
      }
      const obj3 = { style: tmp4.container, children: items3 };
      items3 = [tmp17, tmp21];
      const tmp27 = closure_7(View, obj3);
      cResult[12] = tmp4.container;
      cResult[13] = tmp17;
      cResult[14] = tmp21;
      cResult[15] = tmp27;
      tmp24 = tmp27;
    }
  }
  let tmp18 = null;
  if (null != stateFromStores) {
    tmp18 = null;
    if ("" !== stateFromStores) {
      const obj4 = { style: tmp4.namePill, children: closure_6(applicationId(5270).Text, obj5) };
      obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp4.nameText, children: stateFromStores };
      tmp18 = closure_6(View, obj4);
    }
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp4.namePill;
  cResult[8] = tmp4.nameText;
  cResult[9] = tmp18;
  tmp17 = tmp18;
}) : (function OrbsArcadeFrameHeaderInfo(applicationId) {
  let heldRunChargeTotal;
  let items4;
  let obj6;
  applicationId = applicationId.applicationId;
  let balance;
  const tmp = closure_8();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [applicationId];
  const obj = applicationId(balance[10]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const orbsArcadeGames = OrbsArcadeStore.orbsArcadeGames;
    const found = orbsArcadeGames.find((applicationId) => applicationId.applicationId === applicationId);
    let name;
    if (found != null) {
      name = found.name;
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
  const obj2 = applicationId(balance[11]);
  balance = obj2.useFetchVirtualCurrencyBalance().balance;
  const items2 = [OrbsArcadeStore];
  const obj3 = applicationId(balance[10]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => heldRunChargeTotal.heldRunChargeTotal);
  const items3 = [balance, stateFromStores1];
  let tmp9 = null;
  const obj4 = { style: tmp.container, children: items4 };
  const memo = stateFromStores1.useMemo(() => {
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
      const obj5 = { style: tmp.namePill, children: closure_6(applicationId(balance[12]).Text, obj6) };
      obj6 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp.nameText, children: stateFromStores };
      tmp9 = closure_6(tmp8, obj5);
    }
  }
  items4 = [tmp9, closure_6(applicationId(tmp3[13]).BalanceWidgetPill, { balance: memo })];
  return tmp7(View, obj4);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default tmp4;
