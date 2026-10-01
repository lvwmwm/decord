// Module ID: 15627
// Function ID: 15628
// Name: MainTabs
// Dependencies: [19, 17, 21, 4836, 4688, 7299, 1613, 4540, 5437, 15628, 2]

// Module 15627 (MainTabs)
import react_native from "react-native" /* 17 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import native from "native" /* 4540 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4688 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import useActiveTheme from "useActiveTheme" /* 7299 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 15628 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flex: 1 } });
const memoResult = react.memo(function MainTabs() {
  let ThemeContextProvider;
  let items;
  let items1;
  let obj3;
  const tmp = useColorThemeBackgroundDefault();
  const obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp3 = closure_6();
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: items, children: hasOwnProperty(ThemeContextProvider, obj3) };
  items = [tmp3.container, { marginLeft: rect.left, marginRight: rect.right }];
  obj3 = { gradient: tmp, children: items1 };
  ThemeContextProvider = native.ThemeContextProvider;
  items1 = [React3(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), React3(MainTabsNavigatorPanelDefault, {})];
  return React3(View, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
