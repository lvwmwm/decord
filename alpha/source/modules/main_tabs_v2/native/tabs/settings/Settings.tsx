// Module ID: 18875
// Function ID: 18876
// Name: Settings
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 18753, 1631, 7098, 4962, 18876, 2]

// Module 18875 (Settings)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import DeviceUtils from "DeviceUtils" /* 4962 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7098 */;
import profileModalTransition from "profileModalTransition" /* 18753 */;
import react_mod from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let tmp5;
const SettingsNavigatorDefault = tmp5(18876);
let react = react_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { containerOuter: obj2, containerOuterTablet: obj3, container: { flex: 1 }, containerTablet: obj4 };
obj2 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, flex: 1 };
obj4 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Settings() {
  let containerOuter;
  let items1;
  let left;
  let right;
  let tmp8;
  let top;
  const obj = react2;
  const cResult = obj.c(15);
  const obj2 = profileModalTransition;
  const reportProfileModalTransition = obj2.useReportProfileModalTransition();
  ({ top, left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const tmp7 = useIsWindowLargeDefault();
  if (cResult[0] !== tmp7) {
    let tmp9 = tmp7;
    if (tmp9) {
      const tmpResult = DeviceUtils;
      tmp9 = !tmpResult.isIpadOS();
    }
    cResult[0] = tmp7;
    cResult[1] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[1];
  }
  const tmp10 = closure_6();
  if (tmp7) {
    let tmp13;
    let tmp16;
    const tmpResult2 = DeviceUtils;
    if (tmpResult2.isIpadOS()) {
      containerOuter = tmp10.containerOuter;
    }
    const tmp11 = tmp8 ? tmp10.containerTablet : tmp10.container;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = jsx(SettingsNavigatorDefault, {});
      cResult[9] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[9];
    }
    if (cResult[10] !== tmp11) {
      const tmp19 = <View style={tmp11}>{tmp13}</View>;
      cResult[10] = tmp11;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[11];
    }
    if (cResult[12] === containerOuter) {
      let tmp20;
      if (cResult[13] === tmp16) {
        tmp20 = cResult[14];
      }
      return tmp20;
    }
    const tmp23 = <View style={containerOuter}>{tmp16}</View>;
    cResult[12] = containerOuter;
    cResult[13] = tmp16;
    cResult[14] = tmp23;
    tmp20 = tmp23;
  }
  if (cResult[2] === left) {
    if (cResult[3] === top) {
      if (cResult[4] === right) {
        if (cResult[5] === tmp10.containerOuter) {
          if (cResult[6] === tmp10.containerOuterTablet) {
            if (cResult[7] === tmp8) {
              containerOuter = cResult[8];
            }
          }
        }
      }
    }
  }
  if (tmp8) {
    const items = [tmp10.containerOuterTablet, ];
    const obj5 = { paddingTop: top, paddingLeft: left, paddingRight: right };
    items[1] = obj5;
    items1 = items;
  } else {
    items1 = [tmp10.containerOuter, ];
    const obj6 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj6;
  }
  cResult[2] = left;
  cResult[3] = top;
  cResult[4] = right;
  cResult[5] = tmp10.containerOuter;
  cResult[6] = tmp10.containerOuterTablet;
  cResult[7] = tmp8;
  cResult[8] = items1;
  containerOuter = items1;
}) : (function Settings() {
  let closure_3;
  let left;
  let obj3;
  let right;
  let top;
  let tmp = top;
  let obj = top(right[7]);
  const reportProfileModalTransition = obj.useReportProfileModalTransition();
  const rect = left(right[8])();
  top = rect.top;
  const tmp4 = left;
  left = rect.left;
  right = rect.right;
  const tmp5 = left(right[9])();
  react = tmp5;
  let tmp6 = tmp5;
  if (tmp6) {
    const tmpResult = tmp(right[10]);
    tmp6 = !tmpResult.isIpadOS();
  }
  let closure_4 = tmp6;
  const tmp7 = closure_6();
  let containerOuter = tmp7;
  let items = [tmp7, tmp5, tmp6, top, left, right];
  let obj2 = {
    style: react.useMemo(() => {
      const tmp = closure_3;
      if (tmp) {
        const obj = DeviceUtils;
        if (obj.isIpadOS()) {
          containerOuter = containerOuter.containerOuter;
        }
        return containerOuter;
      }
      if (closure_4) {
        const items = [containerOuter.containerOuterTablet, ];
        const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj2;
        containerOuter = items;
      } else {
        containerOuter = [, ];
        containerOuter[0] = containerOuter.containerOuter;
        const obj3 = { paddingLeft: left, paddingRight: right };
        containerOuter[1] = obj3;
      }
    }, items),
    children: tmp8(tmp9, obj3)
  };
  obj3 = { style: tmp6 ? tmp7.containerTablet : tmp7.container, children: tmp8(tmp4(tmp2[11]), {}) };
  return containerOuter(closure_4, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default tmp3;
