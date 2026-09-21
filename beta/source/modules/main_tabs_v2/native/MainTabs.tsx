// Module ID: 16336
// Function ID: 16337
// Name: MainTabs
// Dependencies: [19, 17, 21, 4758, 558, 568, 4612, 8123, 1616, 5343, 16337, 4471, 2]

// Module 16336 (MainTabs)
import c from "c" /* 568 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4612 */;
import ThemedGradientDefault from "ThemedGradient" /* 5343 */;
import useActiveTheme from "useActiveTheme" /* 8123 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 16337 */;
import noop from "module_19" /* 19 */;

const native = tmp(4471);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4758);
let closure_6 = createStyles.createStyles({ container: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(15);
  const tmp5 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  const tmp7 = closure_6();
  ({ left, right } = useSafeAreaInsetsDefault());
  if (cResult[0] === left) {
    if (cResult[1] === right) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === tmp7.container) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] !== isCustomThemeActive) {
        const obj3 = { absolute: true, mix: isCustomThemeActive };
        const tmp13 = React4(tmp4(5343), obj3);
        cResult[6] = isCustomThemeActive;
        cResult[7] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = React4(tmp4(16337), {});
        cResult[8] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp11) {
          let tmp18 = cResult[11];
        }
        if (cResult[12] === tmp10) {
          if (cResult[13] === tmp18) {
            let tmp21 = cResult[14];
          }
          return tmp21;
        }
        const obj4 = { style: tmp10, children: tmp18 };
        const tmp24 = React4(View, obj4);
        cResult[12] = tmp10;
        cResult[13] = tmp18;
        cResult[14] = tmp24;
        tmp21 = tmp24;
      }
      const obj5 = { gradient: tmp5, children: null };
      const items = [tmp11, tmp15];
      obj5.children = items;
      const tmp20 = hasOwnProperty(native.ThemeContextProvider, obj5);
      cResult[9] = tmp5;
      cResult[10] = tmp11;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    }
    const items1 = [tmp7.container, tmp9];
    cResult[3] = tmp7.container;
    cResult[4] = tmp9;
    cResult[5] = items1;
    tmp10 = items1;
  }
  const obj6 = { marginLeft: left, marginRight: right };
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = obj6;
  tmp9 = obj6;
}) : (() => {
  const tmp = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items = [closure_6().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj2.style = items;
  const obj3 = { gradient: tmp, children: null };
  const items1 = [React4(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), React4(MainTabsNavigatorPanelDefault, {})];
  obj3.children = items1;
  obj2.children = hasOwnProperty(native.ThemeContextProvider, obj3);
  return React4(View, obj2);
}));
