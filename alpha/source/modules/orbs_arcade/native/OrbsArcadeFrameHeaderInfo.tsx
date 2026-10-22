// Module ID: 18264
// Function ID: 18265
// Name: OrbsArcadeFrameHeaderInfo
// Dependencies: [19, 17, 2045, 16298, 21, 4969, 587, 5236, 558, 576, 504, 9420, 5220, 13888, 2]

// Module 18264 (OrbsArcadeFrameHeaderInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ButtonConstants from "ButtonConstants" /* 5236 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16298 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, namePill: obj3, nameText: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFrameHeaderInfo(applicationId) {
  let first;
  let items2;
  let obj5;
  let tmp8;
  let tmp9;
  const obj = applicationId(576);
  const cResult = obj.c(14);
  applicationId = applicationId.applicationId;
  const tmp4 = closure_7();
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
  const tmpResult2 = applicationId(9420);
  const balance = tmpResult2.useFetchVirtualCurrencyBalance().balance;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp4.namePill) {
      let tmp11;
      let tmp15;
      if (cResult[6] === tmp4.nameText) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== balance) {
        const obj2 = { balance };
        const tmp17 = closure_5(applicationId(13888).BalanceWidgetPill, obj2);
        cResult[8] = balance;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp11) {
          let tmp18;
          if (cResult[12] === tmp15) {
            tmp18 = cResult[13];
          }
          return tmp18;
        }
      }
      const obj3 = { style: tmp4.container, children: items2 };
      items2 = [tmp11, tmp15];
      const tmp21 = closure_6(View, obj3);
      cResult[10] = tmp4.container;
      cResult[11] = tmp11;
      cResult[12] = tmp15;
      cResult[13] = tmp21;
      tmp18 = tmp21;
    }
  }
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if ("" !== stateFromStores) {
      const obj4 = { style: tmp4.namePill, children: closure_5(applicationId(5220).Text, obj5) };
      obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp4.nameText, children: stateFromStores };
      tmp12 = closure_5(View, obj4);
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = tmp4.namePill;
  cResult[6] = tmp4.nameText;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : (function OrbsArcadeFrameHeaderInfo(applicationId) {
  let items2;
  let obj5;
  applicationId = applicationId.applicationId;
  const tmp = closure_7();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [applicationId];
  const obj = applicationId(504);
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
  let tmp7 = null;
  const obj3 = { style: tmp.container, children: items2 };
  const obj2 = applicationId(9420);
  const balance = obj2.useFetchVirtualCurrencyBalance().balance;
  const tmp5 = closure_6;
  if (null != stateFromStores) {
    tmp7 = null;
    if ("" !== stateFromStores) {
      const obj4 = { style: tmp.namePill, children: closure_5(applicationId(5220).Text, obj5) };
      obj5 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp.nameText, children: stateFromStores };
      tmp7 = closure_5(tmp6, obj4);
    }
  }
  items2 = [tmp7, closure_5(applicationId(13888).BalanceWidgetPill, { balance })];
  return tmp5(View, obj3);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default tmp5;
