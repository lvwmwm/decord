// Module ID: 5553
// Function ID: 47115
// Name: HeaderSegment
// Dependencies: []
// Exports: default

// Module 5553 (HeaderSegment)
let Platform;
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ Platform, StyleSheet: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;

export default function HeaderSegment(headerTitle) {
  let backgroundStyle;
  let current;
  let headerBackTitle;
  let headerBackgroundContainerStyle;
  let headerLeftContainerStyle;
  let headerRightContainerStyle;
  let headerStatusBarHeight;
  let headerStyle;
  let headerTitleContainerStyle;
  let layout;
  let leftButtonStyle;
  let modal;
  let next;
  let onGoBack;
  let progress;
  let rightButtonStyle;
  let styleInterpolator;
  let titleStyle;
  const tmp = handleLeftLabelLayout(React.useState(undefined), 2);
  const first = tmp[0];
  const arg1 = first;
  const importDefault = tmp[1];
  const tmp3 = handleLeftLabelLayout(React.useState(undefined), 2);
  const first1 = tmp3[0];
  const dependencyMap = first1;
  let closure_3 = tmp3[1];
  function handleTitleLayout(nativeEvent, closure_3) {
    ({ height: closure_0, width: closure_1 } = nativeEvent.nativeEvent.layout);
    callback2((arg0) => {
      let size = arg0;
      if (arg0) {
        return size;
      }
      size = { height: closure_0, width: closure_1 };
    });
  }
  function handleLeftLabelLayout(closure_6, arg1) {
    let height;
    let width;
    ({ height, width } = closure_6.nativeEvent.layout);
    let tmp = first;
    if (first) {
      tmp = height === first.height;
    }
    if (tmp) {
      tmp = width === first.width;
    }
    if (!tmp) {
      const obj = { height, width };
      callback(obj);
    }
  }
  ({ progress, layout } = headerTitle);
  const React = layout;
  ({ modal, onGoBack } = headerTitle);
  headerTitle = headerTitle.headerTitle;
  const jsx = headerTitle;
  let headerLeft = headerTitle.headerLeft;
  if (undefined === headerLeft) {
    let fn;
    if (onGoBack) {
      fn = (arg0) => headerTitle(first(first1[6]).HeaderBackButton, Object.assign({}, arg0));
    }
    headerLeft = fn;
  }
  const headerRight = headerTitle.headerRight;
  ({ headerBackImage: closure_11, headerBackTitle } = headerTitle);
  const headerBackTitleVisible = headerTitle.headerBackTitleVisible;
  ({ headerTruncatedBackTitle: closure_13, headerBackAccessibilityLabel: closure_14, headerBackTestID: closure_15, headerBackAllowFontScaling: closure_16, headerBackTitleStyle: closure_17, headerStyle, headerStatusBarHeight, styleInterpolator } = headerTitle);
  ({ headerTitleContainerStyle, headerLeftContainerStyle, headerRightContainerStyle, headerBackgroundContainerStyle } = headerTitle);
  const tmp5 = importDefault(dependencyMap[5])((arg0, width, progress, progress2, title, leftLabel, height) => {
    let obj = { current: obj };
    obj = { progress };
    let tmp = progress2;
    if (progress2) {
      obj = { progress: progress2 };
      tmp = obj;
    }
    obj.next = tmp;
    obj.layouts = { header: obj2, screen: width, title, leftLabel };
    return arg0(obj);
  });
  const tmp6 = undefined !== headerBackTitleVisible && headerBackTitleVisible;
  let obj = arg1(dependencyMap[6]);
  let defaultHeaderHeight = obj.getDefaultHeaderHeight(layout, modal, headerStatusBarHeight);
  obj = headerStyle;
  if (!headerStyle) {
    obj = {};
  }
  let height = onGoBack.flatten(obj).height;
  if (undefined === height) {
    height = defaultHeaderHeight;
  }
  ({ current, next } = progress);
  let tmp10;
  if (headerBackTitle) {
    tmp10 = first;
  }
  if ("number" === typeof height) {
    defaultHeaderHeight = height;
  }
  const tmp5Result = tmp5(styleInterpolator, layout, current, next, first1, tmp10, defaultHeaderHeight);
  const leftLabelStyle = tmp5Result.leftLabelStyle;
  let fn2;
  ({ titleStyle, leftButtonStyle, rightButtonStyle, backgroundStyle } = tmp5Result);
  if (headerLeft) {
    fn2 = (arg0) => {
      const items = [leftLabelStyle, closure_17];
      return headerLeft(Object.assign({}, arg0, { backImage: closure_11, accessibilityLabel: closure_14, testID: closure_15, allowFontScaling: closure_16, onPress: onGoBack, label: headerBackTitle, truncatedLabel: closure_13, labelStyle: items, onLabelLayout: handleLeftLabelLayout, screenLayout: layout, titleLayout: first1, canGoBack: Boolean(onGoBack) }));
    };
  }
  let fn3;
  if (headerRight) {
    fn3 = (arg0) => headerRight(Object.assign({}, arg0, { canGoBack: Boolean(onGoBack) }));
  }
  obj = { modal, layout, headerTitle: "function" !== typeof headerTitle ? (arg0) => headerTitle(first(first1[6]).HeaderTitle, Object.assign({}, arg0, { onLayout: handleTitleLayout })) : (arg0) => headerTitle(Object.assign({}, arg0, { onLayout: handleTitleLayout })), headerLeft: fn2, headerLeftLabelVisible: tmp6, headerRight: fn3 };
  const items = [titleStyle, headerTitleContainerStyle];
  obj.headerTitleContainerStyle = items;
  const items1 = [leftButtonStyle, headerLeftContainerStyle];
  obj.headerLeftContainerStyle = items1;
  const items2 = [rightButtonStyle, headerRightContainerStyle];
  obj.headerRightContainerStyle = items2;
  const items3 = [backgroundStyle, headerBackgroundContainerStyle];
  obj.headerBackgroundContainerStyle = items3;
  obj.headerStyle = headerStyle;
  obj.headerStatusBarHeight = headerStatusBarHeight;
  return jsx(arg1(dependencyMap[6]).Header, Object.assign(obj, handleTitleLayout(headerTitle, closure_3)));
};
