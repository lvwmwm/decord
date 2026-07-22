// Module ID: 5578
// Function ID: 47375
// Name: NavigatorScreen
// Dependencies: []

// Module 5578 (NavigatorScreen)
const jsxs = arg1(dependencyMap[1]).jsxs;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo((arg0) => {
  let navigation;
  let route;
  let screen;
  let viewStyle;
  ({ screen, route } = arg0);
  const customNavbar = screen.customNavbar;
  ({ navigation, viewStyle } = arg0);
  const designConfig = arg1(dependencyMap[2]).designConfig;
  const trackNavigatorScreenImpression = designConfig.useTrackNavigatorScreenImpression(screen, route);
  let customNavbarResult = null;
  if (null != customNavbar) {
    customNavbarResult = customNavbar();
  }
  const obj = { postpone: screen.postponeRender, ignoreKeyboard: screen.ignoreKeyboard, viewStyle };
  const items = [customNavbarResult, screen.render(route.params, navigation)];
  obj.children = items;
  return jsxs(arg1(dependencyMap[3]).PostponeRender, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Navigator/native/NavigatorScreen.native.tsx");

export const NavigatorScreen = memoResult;
