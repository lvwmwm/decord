// Module ID: 5712
// Function ID: 5713
// Name: NavigatorScreen
// Dependencies: [19, 21, 5713, 5714, 2]

// Module 5712 (NavigatorScreen)
import { jsxs } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((arg0) => {
  let navigation;
  let route;
  let screen;
  let viewStyle;
  ({ screen, route } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = require(5713) /* designConfig */.designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const obj = { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle, children: null };
  const items = [customNavbarResult, screen.render(route.params, navigation)];
  obj[3] = items;
  return jsxs(require(5714) /* PostponeRender */.PostponeRender, { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle, children: null });
});
const result = require("designConfig").fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = memoResult;
