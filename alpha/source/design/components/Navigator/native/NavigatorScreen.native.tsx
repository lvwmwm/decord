// Module ID: 7267
// Function ID: 7268
// Name: NavigatorScreen
// Dependencies: [19, 21, 7268, 7269, 7272, 2]

// Module 7267 (NavigatorScreen)
import config from "config" /* 7268 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsxs: c2, jsx: c3 } = Fragment);
const memoResult = react.memo(function NavigatorScreen(arg0) {
  let gradientColor;
  let items;
  let route;
  let screen;
  let viewStyle;
  ({ screen, route, gradientColor } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = config.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const obj = { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle, children: items };
  items = [customNavbarResult, ];
  const PostponeRender = tmp(7269).PostponeRender;
  items[1] = screen.render(route.params, navigation);
  const tmp5 = React2(PostponeRender, obj);
  let tmp6 = tmp5;
  if (null != gradientColor) {
    const obj2 = { color: gradientColor, children: tmp5 };
    tmp6 = _false(tmp(7272).NavigatorGradientProvider, obj2);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = memoResult;
