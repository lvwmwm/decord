// Module ID: 5098
// Function ID: 44332
// Name: StyleSheet
// Dependencies: []
// Exports: default

// Module 5098 (StyleSheet)
let Platform;
let StyleSheet;
let closure_3 = ["<string:3318677508>", "<string:2706505732>", "<string:1102842064>", "avgTouches", "<string:1098196817>", "activateAfterLongPress", "<string:1734267730>", "<string:4257829764>", "<string:1542539442>", "<string:79305793>", "<string:2741457152>", "<string:1768089441>", "<string:3335999975>", "<string:1584256850>", "<string:1494635061>", "<string:2236783749>", "<string:1113134748>", "nativeGestureRef", "refreshControlGestureRef", "<string:3496601442>", "<string:3411260177>", "<string:4072892980>", "<string:2529096086>", "<string:918080243>", "<string:1922526913>", "<string:2623084271>", "<string:2033673599>", "<string:3583475095>", "<string:1385634965>", "<string:2220791662>", "<string:3411260243>", "<string:1388538420>", "<string:2566773338>", "<string:1616805217>", "<string:3650573492>", "<string:921461060>"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ Animated: closure_6, Platform, StyleSheet } = tmp2);
const View = tmp2.View;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[3]));
const styles = StyleSheet.create({ content: { Text: "hidden", applicationId: 1, message: true }, title: {}, left: {}, right: { "Bool(false)": 4211, "Bool(false)": 2048 }, expand: { -9223372036854775808: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437 } });

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
  let obj = arg1(dependencyMap[4]);
  const rect = obj.useSafeAreaInsets();
  let obj1 = arg1(dependencyMap[4]);
  const safeAreaFrame = obj1.useSafeAreaFrame();
  let layout = children.layout;
  const context = React.useContext(importDefault(dependencyMap[5]));
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
    height = tmp4;
  }
  ({ opacity, transform } = flattenResult);
  ({ minHeight, maxHeight, backgroundColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius } = flattenResult);
  callback(flattenResult, closure_3);
  obj = { backgroundColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius, opacity, transform };
  for (const key10097 in obj) {
    let tmp24 = key10097;
    if (undefined !== obj[key10097]) {
      continue;
    } else {
      delete r6[r32];
      // continue
    }
    continue;
  }
  const items = [obj, false === headerShadowVisible && { category: "spring", top: 0.4, right: 1 }];
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
    headerTitle = (arg0) => callback2(callback(closure_2[7]), Object.assign({}, arg0));
  }
  const obj2 = {};
  const obj3 = { pointerEvents: "box-none", style: items1 };
  const items1 = [StyleSheet.absoluteFill, { zIndex: 0 }, headerBackgroundContainerStyle];
  if (headerBackground) {
    const obj4 = { style: items };
    let headerBackgroundResult = headerBackground(obj4);
  } else {
    headerBackgroundResult = null;
    if (!headerTransparent) {
      const obj5 = { style: items };
      headerBackgroundResult = callback2(importDefault(dependencyMap[8]), obj5);
    }
  }
  obj3.children = headerBackgroundResult;
  const items2 = [callback2(RN.View, obj3), ];
  const obj6 = { pointerEvents: "box-none", style: items3 };
  const obj7 = { height, minHeight, maxHeight, opacity, transform };
  const items3 = [obj7];
  const obj8 = { height: headerStatusBarHeight };
  const items4 = [callback2(View, { pointerEvents: "none", style: obj8 }), ];
  const obj9 = { pointerEvents: "box-none", style: closure_11.content };
  const obj10 = { pointerEvents: "box-none" };
  const items5 = [closure_11.left, , , ];
  let expand = tmp19;
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
  const items8 = [, , , ];
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
