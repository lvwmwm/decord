// Module ID: 17422
// Function ID: 17423
// Name: MainTabs
// Dependencies: [19, 17, 21, 4971, 587, 558, 576, 5146, 9710, 1633, 10625, 17423, 5037, 2]

// Module 17422 (MainTabs)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5146 */;
import useActiveTheme from "useActiveTheme" /* 9710 */;
import ThemedGradientDefault from "ThemedGradient" /* 10625 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 17423 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const native = tmp(5037);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((paddingLeft, paddingRight) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, contentGradient: { left: paddingLeft, right: paddingRight } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight });
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MainTabs() {
  let items;
  let left;
  let right;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(14);
  const tmp5 = useColorThemeBackgroundDefault();
  const obj2 = useActiveTheme;
  const isCustomThemeActive = obj2.useIsCustomThemeActive();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const tmp8 = closure_6(left, right);
  if (cResult[0] === left) {
    let tmp9;
    if (cResult[1] === right) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === isCustomThemeActive) {
      let tmp12;
      let tmp16;
      if (cResult[4] === tmp8.contentGradient) {
        tmp12 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = React3(MainTabsNavigatorPanelDefault, {});
        cResult[6] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp9) {
          let tmp19;
          if (cResult[9] === tmp12) {
            tmp19 = cResult[10];
          }
          if (cResult[11] === tmp8.container) {
            let tmp22;
            if (cResult[12] === tmp19) {
              tmp22 = cResult[13];
            }
            return tmp22;
          }
          const obj3 = { style: tmp8.container, children: tmp19 };
          const tmp25 = React3(View, obj3);
          cResult[11] = tmp8.container;
          cResult[12] = tmp19;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj4 = { gradient: tmp5, children: items };
      items = [tmp9, tmp12, tmp16];
      const tmp21 = hasOwnProperty(native.ThemeContextProvider, obj4);
      cResult[7] = tmp5;
      cResult[8] = tmp9;
      cResult[9] = tmp12;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    }
    const obj5 = { absolute: true, mix: isCustomThemeActive, componentStyles: tmp8.contentGradient };
    const tmp14 = React3(ThemedGradientDefault, obj5);
    cResult[3] = isCustomThemeActive;
    cResult[4] = tmp8.contentGradient;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  }
  if (left > 0) {
    tmp10 = React3(tmp4(10625), { absolute: true, mix: true });
  } else {
    tmp10 = null;
  }
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : (function MainTabs() {
  let ThemeContextProvider;
  let items;
  let left;
  let obj3;
  let right;
  let tmp7Result;
  let tmp9;
  const tmp3 = useColorThemeBackgroundDefault();
  const obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const tmp6 = closure_6(left, right);
  const obj2 = { style: tmp6.container, children: tmp9(ThemeContextProvider, obj3) };
  obj3 = { gradient: tmp3, children: items };
  ThemeContextProvider = native.ThemeContextProvider;
  const tmp8 = View;
  tmp9 = hasOwnProperty;
  if (left > 0) {
    tmp7Result = tmp7(tmp(10625), { absolute: true, mix: true });
  } else {
    tmp7Result = null;
  }
  items = [tmp7Result, , ];
  const obj4 = { absolute: true, mix: isCustomThemeActive, componentStyles: tmp6.contentGradient };
  items[1] = React3(ThemedGradientDefault, obj4);
  items[2] = React3(MainTabsNavigatorPanelDefault, {});
  return React3(tmp8, obj2);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
