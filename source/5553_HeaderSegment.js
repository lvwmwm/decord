// Module ID: 5553
// Function ID: 47151
// Name: HeaderSegment
// Dependencies: [29, 57, 31, 27, 33, 5554, 5526]
// Exports: default

// Module 5553 (HeaderSegment)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let closure_7;
const require = arg1;
let closure_3 = ["progress", "layout", "modal", "onGoBack", "headerTitle", "headerLeft", "headerRight", "headerBackImage", "headerBackTitle", "headerBackTitleVisible", "headerTruncatedBackTitle", "headerBackAccessibilityLabel", "headerBackTestID", "headerBackAllowFontScaling", "headerBackTitleStyle", "headerTitleContainerStyle", "headerLeftContainerStyle", "headerRightContainerStyle", "headerBackgroundContainerStyle", "headerStyle", "headerStatusBarHeight", "styleInterpolator"];
({ Platform, StyleSheet: closure_7 } = get_ActivityIndicator);

export default function HeaderSegment(headerTitle) {
  let backgroundStyle;
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
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
  let tmp = handleLeftLabelLayout(layout.useState(undefined), 2);
  const first = tmp[0];
  const importDefault = tmp[1];
  const tmp3 = handleLeftLabelLayout(layout.useState(undefined), 2);
  const first1 = tmp3[0];
  let closure_3 = tmp3[1];
  function handleTitleLayout(nativeEvent, closure_3) {
    let closure_1;
    let first;
    ({ height: first, width: closure_1 } = nativeEvent.nativeEvent.layout);
    callback2((arg0) => {
      let size = arg0;
      if (arg0) {
        return size;
      }
      size = { height: closure_0, width: closure_1 };
    });
  }
  handleLeftLabelLayout = function handleLeftLabelLayout(layout, arg1) {
    let height;
    let width;
    ({ height, width } = layout.nativeEvent.layout);
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
  };
  ({ progress, layout } = headerTitle);
  ({ modal, onGoBack } = headerTitle);
  headerTitle = headerTitle.headerTitle;
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
  const tmp5 = importDefault(first1[5])((arg0, width, progress, progress2, title, leftLabel, height) => {
    obj = { current: obj };
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
  let obj = first(first1[6]);
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
  obj = { modal, layout, headerTitle: "function" !== typeof headerTitle ? ((arg0) => headerTitle(first(first1[6]).HeaderTitle, Object.assign({}, arg0, { onLayout: handleTitleLayout }))) : ((arg0) => headerTitle(Object.assign({}, arg0, { onLayout: handleTitleLayout }))), headerLeft: fn2, headerLeftLabelVisible: tmp6, headerRight: fn3 };
  let items = [titleStyle, headerTitleContainerStyle];
  obj.headerTitleContainerStyle = items;
  const items1 = [leftButtonStyle, headerLeftContainerStyle];
  obj.headerLeftContainerStyle = items1;
  const items2 = [rightButtonStyle, headerRightContainerStyle];
  obj.headerRightContainerStyle = items2;
  const items3 = [backgroundStyle, headerBackgroundContainerStyle];
  obj.headerBackgroundContainerStyle = items3;
  obj.headerStyle = headerStyle;
  obj.headerStatusBarHeight = headerStatusBarHeight;
  return headerTitle(first(first1[6]).Header, Object.assign(obj, handleTitleLayout(headerTitle, closure_3)));
};
