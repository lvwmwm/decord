// Module ID: 16336
// Function ID: 16337
// Name: MainTabs
// Dependencies: [19, 17, 21, 4788, 4641, 8150, 1612, 4498, 5373, 16337, 2]

// Module 16336 (MainTabs)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import native from "native" /* 4498 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4641 */;
import ThemedGradientDefault from "ThemedGradient" /* 5373 */;
import useActiveTheme from "useActiveTheme" /* 8150 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 16337 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4788);
let closure_6 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(function MainTabs() {
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
});
