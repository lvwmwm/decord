// Module ID: 7344
// Function ID: 7345
// Name: NavigatorScreen
// Dependencies: [19, 21, 7345, 7346, 2]

// Module 7344 (NavigatorScreen)
import Fragment from "Fragment" /* 21 */;
import config from "config" /* 7345 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const PostponeRender2 = tmp(7346);
const jsxs = Fragment.jsxs;
const memoResult = react.memo(function NavigatorScreen(arg0) {
  let route;
  let screen;
  let viewStyle;
  ({ screen, route } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = config.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const items = [customNavbarResult, ];
  const PostponeRender = PostponeRender2.PostponeRender;
  items[1] = screen.render(route.params, navigation);
  return <PostponeRender postpone={screen.postponeRender} ignoreKeyboard={screen.ignoreKeyboard} viewStyle={viewStyle}>{items}</PostponeRender>;
});
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = memoResult;
