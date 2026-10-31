// Module ID: 18039
// Function ID: 18040
// Name: MainTabs
// Dependencies: [19, 17, 21, 5014, 575, 5194, 9823, 1625, 5201, 5596, 5080, 10736, 18040, 2]

// Module 18039 (MainTabs)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5194 */;
import useChatLayoutDefault from "useChatLayout" /* 5201 */;
import useToken from "useToken" /* 5596 */;
import useActiveTheme from "useActiveTheme" /* 9823 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 18040 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp4;
const native = tmp4(5080);
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, marginTop, top) => {
  let num;
  let obj3;
  let obj5;
  let obj6;
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, content: { flex: 1 }, frameContainer: obj3, frameContent: { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" }, framePanels: { marginTop: -marginTop }, frameBorderClip: obj5, frameBorder: obj6 };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight });
  obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: num };
  num = 0;
  if (marginTop <= 0) {
    num = tmp(575).space.PX_16;
  }
  obj5 = { top, left: undefined, width: nativeDefault.radii.md, overflow: "hidden" };
  ({ marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" });
  const merged = Object.assign(_false.absoluteFillObject);
  obj6 = { top: -top, borderTopRightRadius: nativeDefault.radii.md, borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderRightWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderColor: nativeDefault.colors.APP_FRAME_BORDER };
  const merged1 = Object.assign(_false.absoluteFillObject);
  return obj;
});
const memoResult = react.memo(function MainTabs() {
  let ThemeContextProvider;
  let items1;
  let items3;
  let left;
  let obj4;
  let obj7;
  let obj9;
  let right;
  let tmp8Result;
  let top;
  const tmp3 = useColorThemeBackgroundDefault();
  const obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  ({ left, right, top } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj2 = useToken;
  const tmp7 = closure_7(left, right, top, obj2.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  if (isChatLockedOpen) {
    isChatLockedOpen = right > 0;
  }
  const items = [tmp7.container, ];
  const tmp10 = isChatLockedOpen && tmp7.frameContainer;
  items[1] = tmp10;
  const obj3 = { style: items, children: metroRequire(ThemeContextProvider, obj4) };
  obj4 = { gradient: tmp3, children: items1 };
  ThemeContextProvider = native.ThemeContextProvider;
  if (left > 0) {
    tmp8Result = null;
    if (!isChatLockedOpen) {
      tmp8Result = tmp8(tmp(10736), { absolute: true, mix: true });
    }
  } else {
    tmp8Result = null;
  }
  items1 = [tmp8Result, ];
  const items2 = [tmp7.content, ];
  const obj5 = { style: items2, children: items3 };
  const tmp13 = isChatLockedOpen && tmp7.frameContent;
  items2[1] = tmp13;
  items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), , ];
  const items4 = [tmp7.content, ];
  const tmp14 = isChatLockedOpen && tmp7.framePanels;
  items4[1] = tmp14;
  const obj6 = { style: items4, children: hasOwnProperty(MainTabsNavigatorPanelDefault, obj7) };
  obj7 = { showHeaderGradient: !isChatLockedOpen };
  items3[1] = hasOwnProperty(React3, obj6);
  let tmp8Result2 = null;
  if (isChatLockedOpen) {
    const obj8 = { style: tmp7.frameBorderClip, pointerEvents: "none", children: hasOwnProperty(React3, obj9) };
    obj9 = { style: tmp7.frameBorder };
    tmp8Result2 = tmp8(tmp9, obj8);
  }
  items3[2] = tmp8Result2;
  items1[1] = metroRequire(React3, obj5);
  return hasOwnProperty(React3, obj3);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
