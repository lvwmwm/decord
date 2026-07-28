// Module ID: 5585
// Function ID: 47276
// Dependencies: [31, 33, 1560, 5586, 1457, 5587, 5561, 5588]

// Module 5585
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;

export default importAllResult.memo(function Header(navigation) {
  let back;
  let layout;
  let options;
  let progress;
  let route;
  let styleInterpolator;
  ({ back, options, route } = navigation);
  navigation = navigation.navigation;
  ({ layout, progress, styleInterpolator } = navigation);
  let obj = route(1560);
  const safeAreaInsets = obj.useSafeAreaInsets();
  if (undefined !== options.headerBackTitle) {
    let headerBackTitle = options.headerBackTitle;
  } else if (back) {
    headerBackTitle = back.title;
  }
  const items = [navigation, route.key];
  const callback = importAllResult.useCallback(navigation(5586)(() => {
    let isFocusedResult = navigation.isFocused();
    if (isFocusedResult) {
      isFocusedResult = navigation.canGoBack();
    }
    if (isFocusedResult) {
      const _Object = Object;
      const StackActions = route(outer1_2[4]).StackActions;
      const obj = { source: route.key };
      navigation.dispatch(Object.assign({}, StackActions.pop(), obj));
    }
  }, 50), items);
  const context = importAllResult.useContext(navigation(5587));
  if (undefined !== options.headerStatusBarHeight) {
    let num = options.headerStatusBarHeight;
  } else {
    num = 0;
    if (!context) {
      num = 0;
      if (!tmp4) {
        num = safeAreaInsets.top;
      }
    }
  }
  obj = {};
  const tmp5 = jsx;
  const tmp6 = navigation(5588);
  obj.title = route(5561).getHeaderTitle(options, route.name);
  obj.progress = progress;
  obj.layout = layout;
  obj.modal = context;
  if (undefined !== options.headerBackTitle) {
    headerBackTitle = options.headerBackTitle;
  }
  obj.headerBackTitle = headerBackTitle;
  obj.headerStatusBarHeight = num;
  let tmp7;
  if (back) {
    tmp7 = callback;
  }
  obj.onGoBack = tmp7;
  obj.styleInterpolator = styleInterpolator;
  return tmp5(tmp6, Object.assign({}, options, obj));
});
