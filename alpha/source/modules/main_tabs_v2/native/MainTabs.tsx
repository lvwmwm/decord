// Module ID: 18327
// Function ID: 18328
// Name: MainTabs
// Dependencies: [19, 17, 21, 5170, 575, 5340, 9929, 18328, 5754, 5229, 10872, 18329, 2]

// Module 18327 (MainTabs)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5229 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5340 */;
import useToken from "useToken" /* 5754 */;
import useActiveTheme from "useActiveTheme" /* 9929 */;
import ThemedGradientDefault from "ThemedGradient" /* 10872 */;
import useAppFrameDefault from "useAppFrame" /* 18328 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 18329 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, top) => {
  let obj3;
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, content: { flex: 1 }, frameBorderClip: obj3, frameBorderOffset: { top: -top } };
  obj3 = { top, left: undefined, width: nativeDefault.radii.md, overflow: "hidden" };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight });
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
const memoResult = react.memo(function MainTabs() {
  let ThemeContextProvider;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let left;
  let obj4;
  let obj7;
  let obj9;
  let right;
  let tmp8Result;
  const tmp3 = useColorThemeBackgroundDefault();
  const obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp5 = useAppFrameDefault();
  ({ left, right } = tmp5.insets);
  const styles = tmp5.styles;
  const obj2 = useToken;
  const tmp6 = closure_7(left, right, obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  const obj3 = { style: items, children: metroRequire(ThemeContextProvider, obj4) };
  items = [tmp6.container, styles.container];
  obj4 = { gradient: tmp3, children: items1 };
  ThemeContextProvider = native.ThemeContextProvider;
  if (left > 0) {
    tmp8Result = null;
    if (null == styles.container) {
      tmp8Result = tmp8(tmp(10872), { absolute: true, mix: true });
    }
  } else {
    tmp8Result = null;
  }
  items1 = [tmp8Result, ];
  const obj5 = { style: items2, children: items3 };
  items2 = [tmp6.content, styles.content];
  items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), , ];
  const obj6 = { style: items4, children: hasOwnProperty(MainTabsNavigatorPanelDefault, obj7) };
  items4 = [tmp6.content, styles.body];
  obj7 = { showHeaderGradient: null == styles.container };
  items3[1] = hasOwnProperty(React3, obj6);
  let tmp8Result2 = null;
  if (null != styles.container) {
    const obj8 = { style: tmp6.frameBorderClip, pointerEvents: "none", children: hasOwnProperty(React3, obj9) };
    obj9 = { style: items5 };
    items5 = [styles.border, tmp6.frameBorderOffset];
    tmp8Result2 = tmp8(tmp9, obj8);
  }
  items3[2] = tmp8Result2;
  items1[1] = metroRequire(React3, obj5);
  return hasOwnProperty(React3, obj3);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
