// Module ID: 5101
// Function ID: 44356
// Name: StyleSheet
// Dependencies: [29, 31, 27, 33, 1560, 5102, 5099, 5104, 5105]
// Exports: default

// Module 5101 (StyleSheet)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let closure_10;
let closure_6;
let closure_9;
const require = arg1;
let closure_3 = ["height", "minHeight", "maxHeight", "backgroundColor", "borderBottomColor", "borderBottomEndRadius", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStartRadius", "borderBottomWidth", "borderColor", "borderEndColor", "borderEndWidth", "borderLeftColor", "borderLeftWidth", "borderRadius", "borderRightColor", "borderRightWidth", "borderStartColor", "borderStartWidth", "borderStyle", "borderTopColor", "borderTopEndRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStartRadius", "borderTopWidth", "borderWidth", "boxShadow", "elevation", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "opacity", "transform"];
({ Animated: closure_6, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const styles = StyleSheet.create({ content: { flex: 1, flexDirection: "row", alignItems: "stretch" }, title: { marginHorizontal: 16, justifyContent: "center" }, left: { justifyContent: "center", alignItems: "flex-start" }, right: { justifyContent: "center", alignItems: "flex-end" }, expand: { flexGrow: 1, flexBasis: 0 } });

export default function Header(children) {
  let backgroundColor;
  let borderBottomColor;
  let borderBottomEndRadius;
  let borderBottomLeftRadius;
  let borderBottomRightRadius;
  let borderBottomStartRadius;
  let borderBottomWidth;
  let borderColor;
  let borderEndColor;
  let borderEndWidth;
  let borderLeftColor;
  let borderLeftWidth;
  let borderRadius;
  let borderRightColor;
  let borderRightWidth;
  let borderStartColor;
  let borderStartWidth;
  let borderStyle;
  let borderTopColor;
  let borderTopEndRadius;
  let borderTopLeftRadius;
  let borderTopRightRadius;
  let borderTopStartRadius;
  let borderTopWidth;
  let borderWidth;
  let boxShadow;
  let elevation;
  let headerBackground;
  let headerBackgroundContainerStyle;
  let headerLeft;
  let headerLeftContainerStyle;
  let headerLeftLabelVisible;
  let headerPressColor;
  let headerPressOpacity;
  let headerRight;
  let headerRightContainerStyle;
  let headerShadowVisible;
  let headerStatusBarHeight;
  let headerStyle;
  let headerTintColor;
  let headerTitle;
  let headerTitleAlign;
  let headerTitleAllowFontScaling;
  let headerTitleContainerStyle;
  let headerTitleStyle;
  let headerTransparent;
  let maxHeight;
  let minHeight;
  let opacity;
  let shadowColor;
  let shadowOffset;
  let shadowOpacity;
  let shadowRadius;
  let transform;
  let obj = require(1560);
  const rect = obj.useSafeAreaInsets();
  let obj1 = require(1560);
  const safeAreaFrame = obj1.useSafeAreaFrame();
  let layout = children.layout;
  const context = React.useContext(importDefault(5102));
  if (undefined === layout) {
    layout = safeAreaFrame;
  }
  const modal = children.modal;
  ({ headerTitle, headerTitleAlign } = children);
  let str = "left";
  if (undefined !== headerTitleAlign) {
    str = headerTitleAlign;
  }
  ({ headerLeft, headerLeftLabelVisible, headerTintColor, headerBackground, headerRight, headerStyle, headerPressColor, headerPressOpacity, headerStatusBarHeight, headerTransparent, headerTitleAllowFontScaling, headerTitleStyle, headerLeftContainerStyle, headerRightContainerStyle, headerTitleContainerStyle, headerBackgroundContainerStyle, headerShadowVisible } = children);
  if (undefined === headerStatusBarHeight) {
    let num = 0;
    if (!context) {
      num = rect.top;
    }
    headerStatusBarHeight = num;
  }
  if (!headerStyle) {
    headerStyle = {};
  }
  const flattenResult = StyleSheet.flatten(headerStyle);
  let height = flattenResult.height;
  if (undefined === height) {
    height = tmp6;
  }
  ({ opacity, transform } = flattenResult);
  ({ minHeight, maxHeight, backgroundColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius } = flattenResult);
  callback(flattenResult, closure_3);
  obj = { backgroundColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius, opacity, transform };
  for (const key10097 in obj) {
    let tmp26 = key10097;
    if (undefined !== obj[key10097]) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  const items = [obj, false === headerShadowVisible && { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 }];
  let headerLeftResult = null;
  if (headerLeft) {
    obj = { tintColor: headerTintColor, pressColor: headerPressColor, pressOpacity: headerPressOpacity, labelVisible: headerLeftLabelVisible };
    headerLeftResult = headerLeft(obj);
  }
  let headerRightResult = null;
  if (headerRight) {
    obj1 = { tintColor: headerTintColor, pressColor: headerPressColor, pressOpacity: headerPressOpacity };
    headerRightResult = headerRight(obj1);
  }
  if ("function" !== typeof headerTitle) {
    headerTitle = (arg0) => outer1_9(outer1_1(outer1_2[7]), Object.assign({}, arg0));
  }
  const obj2 = {};
  const obj3 = { pointerEvents: "box-none", style: items1 };
  items1 = [StyleSheet.absoluteFill, { zIndex: 0 }, headerBackgroundContainerStyle];
  if (headerBackground) {
    const obj4 = { style: items };
    let headerBackgroundResult = headerBackground(obj4);
  } else {
    headerBackgroundResult = null;
    if (!headerTransparent) {
      const obj5 = { style: items };
      headerBackgroundResult = callback2(importDefault(5105), obj5);
    }
  }
  obj3.children = headerBackgroundResult;
  const items2 = [callback2(RN.View, obj3), ];
  const obj6 = { pointerEvents: "box-none", style: items3 };
  const obj7 = { height, minHeight, maxHeight, opacity, transform };
  items3 = [obj7];
  const obj8 = { height: headerStatusBarHeight };
  const items4 = [callback2(View, { pointerEvents: "none", style: obj8 }), ];
  const obj9 = { pointerEvents: "box-none", style: closure_11.content };
  const obj10 = { pointerEvents: "box-none" };
  const items5 = [closure_11.left, , , ];
  let expand = tmp21;
  if ("center" === str) {
    expand = closure_11.expand;
  }
  items5[1] = expand;
  items5[2] = { marginStart: rect.left };
  items5[3] = headerLeftContainerStyle;
  obj10.style = items5;
  obj10.children = headerLeftResult;
  const items6 = [callback2(RN.View, obj10), , ];
  const obj11 = { pointerEvents: "box-none" };
  const items7 = [closure_11.title, , ];
  const obj12 = {};
  const width = layout.width;
  let num3 = 16;
  if ("center" === str) {
    if (headerLeftResult) {
      let num6 = 32;
      if (false !== headerLeftLabelVisible) {
        num6 = 80;
      }
      num3 = num6;
    }
    const _Math = Math;
    let diff = width - 2 * (num3 + Math.max(rect.left, rect.right));
  } else {
    let num4 = num3;
    if (headerLeftResult) {
      num4 = 72;
    }
    let num5 = num3;
    if (headerRightResult) {
      num5 = 72;
    }
    diff = width - (num4 + num5 + rect.left - rect.right);
  }
  obj12.maxWidth = diff;
  items7[1] = obj12;
  items7[2] = headerTitleContainerStyle;
  obj11.style = items7;
  obj11.children = headerTitle({ children: children.title, allowFontScaling: headerTitleAllowFontScaling, tintColor: headerTintColor, style: headerTitleStyle });
  items6[1] = callback2(RN.View, obj11);
  const obj13 = { pointerEvents: "box-none", style: items8 };
  items8 = [, , , ];
  ({ right: arr9[0], expand: arr9[1] } = closure_11);
  items8[2] = { marginEnd: rect.right };
  items8[3] = headerRightContainerStyle;
  obj13.children = headerRightResult;
  items6[2] = callback2(RN.View, obj13);
  obj9.children = items6;
  items4[1] = closure_10(View, obj9);
  obj6.children = items4;
  items2[1] = closure_10(RN.View, obj6);
  obj2.children = items2;
  return closure_10(React.Fragment, obj2);
};
