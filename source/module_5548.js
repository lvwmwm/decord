// Module ID: 5548
// Function ID: 47065
// Dependencies: []

// Module 5548
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;

export default importAllResult.memo(function Header(navigation) {
  let back;
  let layout;
  let options;
  let progress;
  let route;
  let styleInterpolator;
  ({ back, options, route } = navigation);
  const arg1 = route;
  navigation = navigation.navigation;
  const importDefault = navigation;
  ({ layout, progress, styleInterpolator } = navigation);
  let obj = arg1(dependencyMap[2]);
  const safeAreaInsets = obj.useSafeAreaInsets();
  if (undefined !== options.headerBackTitle) {
    let headerBackTitle = options.headerBackTitle;
  } else if (back) {
    headerBackTitle = back.title;
  }
  const items = [navigation, route.key];
  const callback = importAllResult.useCallback(importDefault(dependencyMap[3])(() => {
    let isFocusedResult = navigation.isFocused();
    if (isFocusedResult) {
      isFocusedResult = navigation.canGoBack();
    }
    if (isFocusedResult) {
      const _Object = Object;
      const StackActions = route(closure_2[4]).StackActions;
      const obj = { source: route.key };
      navigation.dispatch(Object.assign({}, StackActions.pop(), obj));
    }
  }, 50), items);
  const context = importAllResult.useContext(importDefault(dependencyMap[5]));
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
  const tmp6 = importDefault(dependencyMap[7]);
  obj.title = arg1(dependencyMap[6]).getHeaderTitle(options, route.name);
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
