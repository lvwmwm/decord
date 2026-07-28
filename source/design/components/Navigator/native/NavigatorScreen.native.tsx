// Module ID: 5614
// Function ID: 47528
// Name: NavigatorScreen
// Dependencies: [31, 33, 5615, 5616, 2]

// Module 5614 (NavigatorScreen)
import { jsxs } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((arg0) => {
  let navigation;
  let route;
  let screen;
  let viewStyle;
  ({ screen, route } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = require(5615) /* designConfig */.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const obj = { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle };
  const items = [customNavbarResult, screen.render(route.params, navigation)];
  obj.children = items;
  return jsxs(require(5616) /* PostponeRender */.PostponeRender, { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle });
});
const result = require("designConfig").fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = memoResult;
